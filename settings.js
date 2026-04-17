// Functions related to the settings sheet

function refreshData() {
  var ss = SpreadsheetApp.openById(SPREADSHEETID);
  var ssSet = ss.getSheetByName("SETTINGS");
  var ssExp = ss.getSheetByName("EXPENDITURE");
  var ssInc = ss.getSheetByName("INCOME");
  var ssSum = ss.getSheetByName("SUMMARY");
  var todayDate = new Date();

  var savedQuarterRow = _getCurrentSavedQuarterRow(todayDate);
  var expQuarters = _getCurrentExpQuarterCol(todayDate);
  var incQuarters = _getCurrentIncQuarterCol(todayDate);
  refreshSavedGraph(ssSet, ssSum, savedQuarterRow);
  refreshExpenditure(ssSet, ssExp, expQuarters);
  refreshIncome(ssSet, ssInc, incQuarters);
}

function refreshSavedGraph(ssSet, ssSum, savedQuarterRow) {

  var emerg_value = ssSum.getRange(EMERG_SAVE_COL + savedQuarterRow).getValue();
  var tfsa_value = ssSum.getRange(TFSA_SAVE_COL + savedQuarterRow).getValue();
  var rrsp_value = ssSum.getRange(RRSP_SAVE_COL + savedQuarterRow).getValue();
  var fhsa_value = ssSum.getRange(FHSA_SAVE_COL + savedQuarterRow).getValue();
  var unreg_value = ssSum.getRange(UNREG_SAVE_COL + savedQuarterRow).getValue();

  var dest_range = ssSet.getRange(SETTINGS_SAVED);
  dest_range.setValue(emerg_value + tfsa_value + rrsp_value + fhsa_value + unreg_value);
}

function refreshExpenditure(ssSet, ssExp, expQuarters) {

  var quarterDateCol = expQuarters[0];
  var quarterExpCol = expQuarters[1];
  var quarterDataDate = expQuarters[2];
  var quarterDataExp = expQuarters[3];
  var quarterDataCat = expQuarters[4];
  var quarterTotalExp = expQuarters[5];
  var quarterExtraExp = expQuarters[6];

  // Set the total expenses and income row
  var data_value = ssExp.getRange(quarterTotalExp).getValue();
  var dest_range = ssSet.getRange(SETTINGS_TOTAL_EXP);
  dest_range.setValue(data_value);

  var data_value = ssExp.getRange(quarterExtraExp).getValue();
  var dest_range = ssSet.getRange(SETTINGS_EXTRA_EXP);
  dest_range.setValue(0 - data_value);

  // Set the quarterly totals
  var data_values = ssExp.getRange(quarterDateCol + EXP_START_ROW + ":" + quarterExpCol + EXP_END_ROW).getValues();
  var dest_range = ssSet.getRange(SETTINGS_CUM_DATE_COL + SETTINGS_START_ROW + ":" + SETTINGS_EXP_CUM_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_values);

  var data_values = ssExp.getRange(quarterDataDate + EXP_START_ROW + ":" + quarterDataDate + EXP_END_ROW).getValues();
  var dest_range = ssSet.getRange(SETTINGS_QUARTER_EXP_DATE_COL + SETTINGS_START_ROW + ":" + SETTINGS_QUARTER_EXP_DATE_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_values);

  var data_values = ssExp.getRange(quarterDataExp + EXP_START_ROW + ":" + quarterDataCat + EXP_END_ROW).getValues();
  var dest_range = ssSet.getRange(SETTINGS_QUARTER_EXP_AMT_COL + SETTINGS_START_ROW + ":" + SETTINGS_QUARTER_EXP_CAT_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_values);

  // Set the cumlative totals
  // Get values from the three columns (different lengths)
  var q1_exp = ssExp.getRange(Q1_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q1_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();
  var q2_exp = ssExp.getRange(Q2_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q2_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();
  var q3_exp = ssExp.getRange(Q3_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q3_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();
  var q4_exp = ssExp.getRange(Q4_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q4_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();
  
  // Combine all data into one array
  var combined = q1_exp.concat(q2_exp).concat(q3_exp).concat(q4_exp);
  
  // Remove empty rows from the combined array
  var filtered = combined.filter(function(row) {
    return row[0] !== "";
  });

  // Need to offset as settings starts at SETTINGS_START_ROW
  var end_row = (filtered.length + Number(SETTINGS_START_ROW) - 1);
  
  var dest_range = ssSet.getRange(SETTINGS_EXP_DATA_DATE_COL + SETTINGS_START_ROW + ":" + SETTINGS_EXP_CAT_COL + end_row);
  dest_range.setValues(filtered);
}

function refreshIncome(ssSet, ssInc, incQuarters) {

  var quarterIncCol = incQuarters[1];
  var quarterDataDate = incQuarters[2];
  var quarterDataEnd = incQuarters[4];
  var quarterTotalInc = incQuarters[5];
  var quarterSalaryInc = incQuarters[6];
  var quarterExtraInc = incQuarters[7];

  var data_value = ssInc.getRange(quarterTotalInc).getValue();
  var dest_range = ssSet.getRange(SETTINGS_TOTAL_INC);
  dest_range.setValue(data_value);

  var data_value = ssInc.getRange(quarterSalaryInc).getValue();
  var dest_range = ssSet.getRange(SETTINGS_SALARY_INC);
  dest_range.setValue(data_value);

  var data_value = ssInc.getRange(quarterExtraInc).getValue();
  var dest_range = ssSet.getRange(SETTINGS_EXTRA_INC);
  dest_range.setValue(data_value);

  var data_values = ssInc.getRange(quarterIncCol + INC_START_ROW + ":" + quarterIncCol + INC_END_ROW).getValues();
  var dest_range = ssSet.getRange(SETTINGS_INC_CUM_COL + SETTINGS_START_ROW + ":" + SETTINGS_INC_CUM_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_values);

  var data_values = ssInc.getRange(quarterDataDate + DATA_INC_START_ROW + ":" + quarterDataEnd + DATA_INC_END_ROW).getValues();
  var dest_range = ssSet.getRange(SETTINGS_SALARY_INCOME);
  dest_range.setValues(data_values);

  var data_values = ssInc.getRange(quarterDataDate + DATA_INC_EXTRA_START_ROW + ":" + quarterDataEnd + DATA_INC_EXTRA_END_ROW).getValues();
  var dest_range = ssSet.getRange(SETTINGS_EXTRA_INCOME);
  dest_range.setValues(data_values);
}
