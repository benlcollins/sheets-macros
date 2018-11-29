/** @OnlyCurrentDoc */

// 3. Format Text Example
function FormatText() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontStyle('italic')
  .setFontColor('#ff0000')
  .setFontSize(18)
  .setFontFamily('Montserrat');
};

// 6.3 convert all formulas to values in the active sheet
function formulasToValuesActiveSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  range.copyValuesToRange(sheet, 1, range.getLastColumn(), 1, range.getLastRow());
};

// 6.4 convert all formulas to values in every sheet of the Google Sheet
function formulasToValuesGlobal() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    var range = sheet.getDataRange();
    range.copyValuesToRange(sheet, 1, range.getLastColumn(), 1, range.getLastRow());
  });
};

// 6.5 sort sheets alphabetically
function sortSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var sheetNames = [];
  sheets.forEach(function(sheet,i) {
    sheetNames.push(sheet.getName());
  });
  sheetNames.sort().forEach(function(sheet,i) {
    spreadsheet.getSheetByName(sheet).activate();
    spreadsheet.moveActiveSheet(i + 1);
  });
};
    
// 6.6 unhide all rows and columns in current Sheet data range
function unhideRowsColumnsActiveSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  sheet.unhideRow(range);
  sheet.unhideColumn(range);
}

// 6.7 unhide all rows and columns in data ranges of entire Google Sheet
function unhideRowsColumnsGlobal() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    var range = sheet.getDataRange();
    sheet.unhideRow(range);
    sheet.unhideColumn(range);
  });
};

// 6.8 set all Sheets tabs to red
function setTabColor() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    sheet.setTabColor("ff0000");
  });
};
  
// 6.9 remove all Sheets tabs color
function resetTabColor() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    sheet.setTabColor(null);
  });
};

// 6.10 hide all sheets except the active one
function hideAllSheetsExceptActive() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    if (sheet.getName() != SpreadsheetApp.getActiveSheet().getName()) 
      sheet.hideSheet();
  });
};

// 6.11 Unhide all sheets in Google Sheet
function unhideAllSheets() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    sheet.showSheet();
  });
};


// 6.12 reset all filters for a data range on current Sheet
function resetFilter() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  range.getFilter().remove();
  range.createFilter();
}