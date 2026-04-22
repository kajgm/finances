/* Constants */
const SPREADSHEETID = "1NlpL4D-Gm3XO8plHLC1Ky6u99UA7gNYRq4lRt4EmmGI";

/***** Expenditure Related Constansts *****/
const EXP_START_ROW = 6;
const EXP_END_ROW = 300;

/***** Income Related Constants *****/
const INC_START_ROW = 6;
const INC_END_ROW = 300;
const DATA_INC_START_ROW = 6;
const DATA_INC_END_ROW = 13;
const DATA_INC_EXTRA_START_ROW = 18;
const DATA_INC_EXTRA_END_ROW = 29;

// Default function to create in-spreadsheet dropdown menu
function onOpen() {

  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Scripts')
    .addItem('Refresh Charts', 'refreshData')
    .addToUi();
}

// Helper function to get current date in specific format
function _getDateString(date){
  const MONTH_NAMES = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

  const month = MONTH_NAMES[date.getMonth()];
  const day = date.getDate();
  const dateString = month + " " + day;

  return dateString;
}
