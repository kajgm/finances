/***** Functions related to the generation of the daily running totals on the right side of the expenditure and income tabs *****/

// Function called via daily job
function addNewDay(){

  const todayDate = new Date();
  const dateString = _getDateString(todayDate);
  addNewExpDay(todayDate, dateString);
  addNewIncDay(todayDate, dateString);
}

// Expenditure
function addNewExpDay(todayDate, dateString) {

  const ss = SpreadsheetApp.openById(SPREADSHEETID).getSheetByName("EXPENDITURE");

  const quarters = _getCurrentExpQuarterCol(todayDate);
  const quarterDateCol = quarters[0];
  const quarterExpCol = quarters[1];
  const quarterDataDate = quarters[2];
  const quarterDataExp = quarters[3];

  const data_range = ss.getRange(quarterDateCol + EXP_START_ROW + ":" + quarterDateCol + EXP_END_ROW).getValues();

  // Find the end of the range
  for (var i = 0; i < data_range.length; i++){
    if (data_range[i] == ''){
      break;
    }
  }

  // Index is found index + top frozen row (6)
  const ss_index = i + EXP_START_ROW;

  // Set the date
  const date_cell = ss.getRange(quarterDateCol + ss_index);
  date_cell.setValue(dateString);

  // Copy the previous day formula, or create a new formula
  const formula_cell = ss.getRange(quarterExpCol + ss_index);
  var formula = "";
  if ((todayDate.getDate()) == 1 && (todayDate.getMonth() % 3 == 0)){
    formula = "=-ABS(SUM(SUMIFS($"+ quarterDataExp + "$" + EXP_START_ROW + ":$" + quarterDataExp + "$" + EXP_END_ROW + ",$" + quarterDataDate + "$" + EXP_START_ROW + ":$" + quarterDataDate + "$" + EXP_END_ROW + ","+ quarterDateCol + ss_index + ")))";
    formula_cell.setFormula(formula);
  } else if (todayDate.getDate() == 2){
    formula = "=-ABS(SUM(SUMIFS($"+ quarterDataExp + "$" + EXP_START_ROW + ":$" + quarterDataExp + "$" + EXP_END_ROW + ",$" + quarterDataDate + "$" + EXP_START_ROW + ":$" + quarterDataDate + "$" + EXP_END_ROW + ","+ quarterDateCol + ss_index + "))-" + quarterExpCol + (ss_index - 1) + ")";
    formula_cell.setFormula(formula);
  } else {
    formula = ss.getRange(quarterExpCol + (ss_index - 1)).getFormulaR1C1();
    formula_cell.setFormulaR1C1(formula);
  }
}

// Income
function addNewIncDay(todayDate, dateString) {

  const ss = SpreadsheetApp.openById(SPREADSHEETID).getSheetByName("INCOME");

  const quarters = _getCurrentIncQuarterCol(todayDate);
  const quarterDateCol = quarters[0];
  const quarterIncCol = quarters[1];
  const quarterDataDate = quarters[2];
  const quarterDataInc = quarters[3];

  const data_range = ss.getRange(quarterDateCol + INC_START_ROW + ":" + quarterDateCol + INC_END_ROW).getValues();

  // Find the end of the range
  for (var i = 0; i < data_range.length; i++){
    if (data_range[i] == ''){
      break;
    }
  }

  // Index is found index + top frozen row (6)
  const ss_index = i + INC_START_ROW;

  // Set the date
  const date_cell = ss.getRange(quarterDateCol + ss_index);
  date_cell.setValue(dateString);

  // Copy the previous day formula, or create a new formula
  const formula_cell = ss.getRange(quarterIncCol + ss_index);
  var formula = "";
  if ((todayDate.getDate()) == 1 && (todayDate.getMonth() % 3 == 0)){
    formula = "=SUM(SUMIFS($" + quarterDataInc + "$" + DATA_INC_START_ROW + ":$" + quarterDataInc + "$" + DATA_INC_END_ROW + ",$" + quarterDataDate + "$" + DATA_INC_START_ROW + ":$" + quarterDataDate + "$" + DATA_INC_END_ROW + ","+ quarterDateCol + ss_index + "))+SUM(SUMIFS($" + quarterDataInc + "$" + DATA_INC_EXTRA_START_ROW + ":$" + quarterDataInc + "$" + DATA_INC_EXTRA_END_ROW + ",$" + quarterDataDate + "$" + DATA_INC_EXTRA_START_ROW + ":$" + quarterDataDate + "$" + DATA_INC_EXTRA_END_ROW + ","+ quarterDateCol + ss_index + "))";
    formula_cell.setFormula(formula);
  } else if ((todayDate.getDate()) == 2 && (todayDate.getMonth() % 3 == 0)){
    formula = "=SUM(SUMIFS($" + quarterDataInc + "$" + DATA_INC_START_ROW + ":$" + quarterDataInc + "$" + DATA_INC_END_ROW + ",$" + quarterDataDate + "$" + DATA_INC_START_ROW + ":$" + quarterDataDate + "$" + DATA_INC_END_ROW + ","+ quarterDateCol + ss_index + "))+SUM(SUMIFS($" + quarterDataInc + "$" + DATA_INC_EXTRA_START_ROW + ":$" + quarterDataInc + "$" + DATA_INC_EXTRA_END_ROW + ",$" + quarterDataDate + "$" + DATA_INC_EXTRA_START_ROW + ":$" + quarterDataDate + "$" + DATA_INC_EXTRA_END_ROW + ","+ quarterDateCol + ss_index + "))+" + quarterIncCol + (ss_index - 1);
    formula_cell.setFormula(formula);
  } else {
    formula = ss.getRange(quarterIncCol + (ss_index - 1)).getFormulaR1C1();
    formula_cell.setFormulaR1C1(formula);
  }
}
