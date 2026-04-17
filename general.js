function onOpen() {

  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Scripts')
    .addItem('Refresh Charts', 'refreshData')
    .addToUi();
}

function _getDateString(date){

  var month = MONTH_NAMES[date.getMonth()];
  var day = date.getDate();
  var dateString = month + " " + day;

  return dateString;
}

/* Helper Functions */
function _getCurrentSavedQuarterRow(date){
  var quarterInt = Math.floor((date.getMonth() + 3) / 3);

  switch(quarterInt) {
    case 1:
      savedRow = Q1_SAVE_ROW;
      break;
    case 2:
      savedRow = Q2_SAVE_ROW;
      break;
    case 3:
      savedRow = Q3_SAVE_ROW;
      break;
    case 4:
      savedRow = Q4_SAVE_ROW;
      break;
  }

  return savedRow;
}

function _getCurrentExpQuarterCol(date){

  var quarterInt = Math.floor((date.getMonth() + 3) / 3);

  dateCol = "";
  expCol = "";
  dataDate = "";
  dataExp = "";
  dataCat = "";
  expTotal = "";
  expExtra = "";

  switch(quarterInt) {
    case 1:
      dateCol = Q1_EXP_DATE_COL;
      expCol = Q1_EXP_EXPENDITURE_COL;
      dataDate = Q1_DATA_EXP_DATE_COL;
      dataExp = Q1_DATA_EXPENDITURE_COL;
      dataCat = Q1_DATA_EXP_CAT_COL;
      expTotal = Q1_EXP_TOTAL;
      expExtra = Q1_EXTRA_EXP_TOTAL;
      break;
    case 2:
      dateCol = Q2_EXP_DATE_COL;
      expCol = Q2_EXP_EXPENDITURE_COL;
      dataDate = Q2_DATA_EXP_DATE_COL;
      dataExp = Q2_DATA_EXPENDITURE_COL;
      dataCat = Q2_DATA_EXP_CAT_COL;
      expTotal = Q2_EXP_TOTAL;
      expExtra = Q2_EXTRA_EXP_TOTAL;
      break;
    case 3:
      dateCol = Q3_EXP_DATE_COL;
      expCol = Q3_EXP_EXPENDITURE_COL;
      dataDate = Q3_DATA_EXP_DATE_COL;
      dataExp = Q3_DATA_EXPENDITURE_COL;
      dataCat = Q3_DATA_EXP_CAT_COL;
      expTotal = Q3_EXP_TOTAL;
      expExtra = Q3_EXTRA_EXP_TOTAL;
      break;
    case 4:
      dateCol = Q4_EXP_DATE_COL;
      expCol = Q4_EXP_EXPENDITURE_COL;
      dataDate = Q4_DATA_EXP_DATE_COL;
      dataExp = Q4_DATA_EXPENDITURE_COL;
      dataCat = Q4_DATA_EXP_CAT_COL;
      expTotal = Q4_EXP_TOTAL;
      expExtra = Q4_EXTRA_EXP_TOTAL;
      break;
  }

  return [dateCol, expCol, dataDate, dataExp, dataCat, expTotal, expExtra];
}

function _getCurrentIncQuarterCol(date){

  var quarterInt = Math.floor((date.getMonth() + 3) / 3);

  dateCol = "";
  incCol = "";
  dataDate = "";
  dataInc = "";
  dataEnd = "";
  incTotal = "";
  incSalary = "";
  incExtra = "";

  switch(quarterInt) {
    case 1:
      dateCol = Q1_INC_DATE_COL;
      incCol = Q1_INC_INCOME_COL;
      dataDate = Q1_DATA_INC_DATE_COL;
      dataInc = Q1_DATA_INCOME_COL;
      dataEnd = Q1_DATA_END_COL;
      incTotal = Q1_INC_TOTAL;
      incSalary = Q1_SALARY_INC_TOTAL;
      incExtra = Q1_EXTRA_INC_TOTAL;
      break;
    case 2:
      dateCol = Q2_INC_DATE_COL;
      incCol = Q2_INC_INCOME_COL;
      dataDate = Q2_DATA_INC_DATE_COL;
      dataInc = Q2_DATA_INCOME_COL;
      dataEnd = Q2_DATA_END_COL;
      incTotal = Q2_INC_TOTAL;
      incSalary = Q2_SALARY_INC_TOTAL;
      incExtra = Q2_EXTRA_INC_TOTAL;
      break;
    case 3:
      dateCol = Q3_INC_DATE_COL;
      incCol = Q3_INC_INCOME_COL;
      dataDate = Q3_DATA_INC_DATE_COL;
      dataInc = Q3_DATA_INCOME_COL;
      dataEnd = Q3_DATA_END_COL;
      incTotal = Q3_INC_TOTAL;
      incSalary = Q3_SALARY_INC_TOTAL;
      incExtra = Q3_EXTRA_INC_TOTAL;
      break;
    case 4:
      dateCol = Q4_INC_DATE_COL;
      incCol = Q4_INC_INCOME_COL;
      dataDate = Q4_DATA_INC_DATE_COL;
      dataInc = Q4_DATA_INCOME_COL;
      dataEnd = Q4_DATA_END_COL;
      incTotal = Q4_INC_TOTAL;
      incSalary = Q4_SALARY_INC_TOTAL;
      incExtra = Q4_EXTRA_INC_TOTAL;
      break;
  }

  return [dateCol, incCol, dataDate, dataInc, dataEnd, incTotal, incSalary, incExtra];
}
