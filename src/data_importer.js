/**Developed by Dmytro Symonov
 * {s} symonov.com
 * 2019
 */
/*
* DATA IMPORTER
*/
function dataImporter(attrImport, attrExport, files) {
    console.log('<< import start:');
    const compsImport = $(`[${attrImport}]`);
    let i = 0, j = 0;
    // import function
    (function importCycle() {
        let attrImportVal = $(compsImport[j]).attr(`${attrImport}`);
        if ($(compsImport[j]).children().length === 0) {
            $(compsImport[j]).load(`${files[i]} [${attrExport}="${attrImportVal}"]>*`,
                function (response, status, xhr) {
                    // import status
                    if ($(compsImport[j]).children().length > 0) {
                        console.log(`- file: ${files[i]} -> el: ${attrImportVal} -> ${status}`);
                    }
                    // next step after import
                    if (compsImport.length - 1 === j) {
                        j = 0;
                        i++;
                        importCycle();
                    } else {
                        j++;
                        importCycle();
                    }
                });
            // next step whiout import
        } else if (compsImport.length - 1 === j && files.length - 1 >= i) {
            j = 0;
            i++;
            importCycle();
        } else if (files.length - 1 >= i) {
            j++;
            importCycle();
            // end of import
        } else {
            console.log('import end. >>');
            // callback - main js
            mainJS();
        }
    })();
}
// init - data importer
dataImporter('data-import', 'data-export', ['ui.html']); // this arguments for example
// main js
function mainJS() {

    // main js - end
}