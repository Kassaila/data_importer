/**Developed by Dmytro Symonov
 * {s} symonov.com
 * 2019
 */
/*
* DATA IMPORTER
*/
function dataImport(attrImport, attrExport, docsImport) {
    console.log('<< import start:');
    const compsImport = $(`[${attrImport}]`);
    let i = 0, j = 0;
    // import function
    (function importRecurcion() {
        let attrImportVal = $(compsImport[j]).attr(`${attrImport}`);
        if ($(compsImport[j]).children().length === 0) {
            $(compsImport[j]).load(`${docsImport[i]} [${attrExport}="${attrImportVal}"]>*`,
                function (response, status, xhr) {
                    // import status
                    if ($(compsImport[j]).children().length > 0) {
                        console.log(`- file: ${docsImport[i]} -> el: ${attrImportVal} -> ${status}`);
                    }
                    // next step after import
                    if (compsImport.length - 1 === j) {
                        j = 0;
                        i++;
                        importRecurcion();
                    } else {
                        j++;
                        importRecurcion();
                    }
                });
        // next step whiout import
        } else if (compsImport.length - 1 === j && docsImport.length - 1 >= i) {
            j = 0;
            i++;
            importRecurcion();
        } else if (docsImport.length - 1 >= i) {
            j++;
            importRecurcion();
        // end of import
        } else {
            console.log('import end. >>');
            // callback - main js
            mainJS();
        }
    })();
}
// init - data importer
dataImport('data-import', 'data-export', ['ui.html']); // this arguments for example
// main js
function mainJS() {

    // main js - end
}