/***** Functions related to creating a new sheet at the start of the year *****/

function newYear() {
  var ss = SpreadsheetApp.openById(SPREADSHEETID);

  duplicateTemplates(ss);
  resetSummaryMatrix(ss);
}

function resetSummaryMatrix(ss) {
  var summarySheet = ss.getSheetByName('SUMMARY');
  var settingsSheet = ss.getSheetByName('SETTINGS');
}

function duplicateTemplates(ss) {

  var incSheet = ss.getSheetByName('INCOME TEMPLATE');
  var expSheet = ss.getSheetByName('EXPENDITURE TEMPLATE');
  var tfsaSheet = ss.getSheetByName('TFSA TEMPLATE');
  var summarySheet = ss.getSheetByName('SUMMARY TEMPLATE');

  incSheet.copyTo(ss).setName('INCOME');
  expSheet.copyTo(ss).setName('EXPENDITURE');
  tfsaSheet.copyTo(ss).setName('TFSA');
  summarySheet.copyTo(ss).setName('SUMMARY');
}
