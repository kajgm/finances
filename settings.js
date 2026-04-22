/***** Functions related to the settings sheet *****/

const SETTINGS_START_ROW = "4";
// Settings and Income/Expenditures have diff starting values
// so it needs to be a slight offset
const SETTINGS_END_ROW = "298";

// Function called via daily job or through scripts dropdown
// Also a good smoke test to test changes
function refreshData() {

  const ss = SpreadsheetApp.openById(SPREADSHEETID);
  const ssSet = ss.getSheetByName("SETTINGS");
  const ssExp = ss.getSheetByName("EXPENDITURE");
  const ssInc = ss.getSheetByName("INCOME");
  const ssSum = ss.getSheetByName("SUMMARY");
  const todayDate = new Date();

  const savedQuarterRow = _getCurrentSavedQuarterRow(todayDate);
  const expQuarters = _getCurrentExpQuarterCol(todayDate);
  const incQuarters = _getCurrentIncQuarterCol(todayDate);
  refreshSavedGraph(ssSet, ssSum, savedQuarterRow);
  refreshExpenditure(ssSet, ssExp, expQuarters);
  refreshIncome(ssSet, ssInc, incQuarters);
}

// Refresh the values used by the saved ratio pie chart
function refreshSavedGraph(ssSet, ssSum, savedQuarterRow) {

  const EMERG_SAVE_COL = "T";
  const TFSA_SAVE_COL = "W";
  const RRSP_SAVE_COL = "Z";
  const FHSA_SAVE_COL = "AC";
  const UNREG_SAVE_COL = "AF";
  const SETTINGS_SAVED = "J27";

  const emerg_value = ssSum.getRange(EMERG_SAVE_COL + savedQuarterRow).getValue();
  const tfsa_value = ssSum.getRange(TFSA_SAVE_COL + savedQuarterRow).getValue();
  const rrsp_value = ssSum.getRange(RRSP_SAVE_COL + savedQuarterRow).getValue();
  const fhsa_value = ssSum.getRange(FHSA_SAVE_COL + savedQuarterRow).getValue();
  const unreg_value = ssSum.getRange(UNREG_SAVE_COL + savedQuarterRow).getValue();

  const dest_range = ssSet.getRange(SETTINGS_SAVED);
  dest_range.setValue(emerg_value + tfsa_value + rrsp_value + fhsa_value + unreg_value);
}

function refreshExpenditure(ssSet, ssExp, expQuarters) {

  const SETTINGS_CUM_DATE_COL = "Q";
  const SETTINGS_TOTAL_EXP = "M24";
  const SETTINGS_EXTRA_EXP = "N24";
  const SETTINGS_EXP_CUM_COL = "R";
  const SETTINGS_QUARTER_EXP_DATE_COL = "U";
  const SETTINGS_QUARTER_EXP_AMT_COL = "V";
  const SETTINGS_QUARTER_EXP_CAT_COL = "W";
  const SETTINGS_EXP_DATA_DATE_COL = "Y";
  const SETTINGS_EXP_DESC_COL = "Z";
  const SETTINGS_EXP_AMT_COL = "AA";
  const SETTINGS_EXP_CAT_COL = "AB";
  const SETTINGS_EXP_MON_COL = "AC";

  const quarterDateCol = expQuarters[0];
  const quarterExpCol = expQuarters[1];
  const quarterDataDate = expQuarters[2];
  const quarterDataExp = expQuarters[3];
  const quarterDataCat = expQuarters[4];
  const quarterTotalExp = expQuarters[5];
  const quarterExtraExp = expQuarters[6];

  // Set the total expenses and income row
  var data_value = ssExp.getRange(quarterTotalExp).getValue();
  var dest_range = ssSet.getRange(SETTINGS_TOTAL_EXP);
  dest_range.setValue(data_value);

  data_value = ssExp.getRange(quarterExtraExp).getValue();
  dest_range = ssSet.getRange(SETTINGS_EXTRA_EXP);
  dest_range.setValue(0 - data_value);

  // Set the quarterly totals
  data_value = ssExp.getRange(quarterDateCol + EXP_START_ROW + ":" + quarterExpCol + EXP_END_ROW).getValues();
  dest_range = ssSet.getRange(SETTINGS_CUM_DATE_COL + SETTINGS_START_ROW + ":" + SETTINGS_EXP_CUM_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_value);

  data_value = ssExp.getRange(quarterDataDate + EXP_START_ROW + ":" + quarterDataDate + EXP_END_ROW).getValues();
  dest_range = ssSet.getRange(SETTINGS_QUARTER_EXP_DATE_COL + SETTINGS_START_ROW + ":" + SETTINGS_QUARTER_EXP_DATE_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_value);

  data_value = ssExp.getRange(quarterDataExp + EXP_START_ROW + ":" + quarterDataCat + EXP_END_ROW).getValues();
  dest_range = ssSet.getRange(SETTINGS_QUARTER_EXP_AMT_COL + SETTINGS_START_ROW + ":" + SETTINGS_QUARTER_EXP_CAT_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_value);

  // Set the cumlative totals
  // Get values from the three columns (different lengths)
  const q1_exp = ssExp.getRange(Q1_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q1_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();
  const q2_exp = ssExp.getRange(Q2_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q2_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();
  const q3_exp = ssExp.getRange(Q3_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q3_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();
  const q4_exp = ssExp.getRange(Q4_DATA_EXP_DATE_COL + EXP_START_ROW + ":" + Q4_DATA_EXP_CAT_COL + EXP_END_ROW).getValues();

  // Combine all data into one array
  const combined = q1_exp.concat(q2_exp).concat(q3_exp).concat(q4_exp);

  // Remove empty rows from the combined array
  const filtered = combined.filter(function(row) {
    return row[0] !== "";
  });

  // Need to offset as settings starts at SETTINGS_START_ROW
  const end_row = (filtered.length + Number(SETTINGS_START_ROW) - 1);

  dest_range = ssSet.getRange(SETTINGS_EXP_DATA_DATE_COL + SETTINGS_START_ROW + ":" + SETTINGS_EXP_CAT_COL + end_row);
  dest_range.setValues(filtered);
}

function refreshIncome(ssSet, ssInc, incQuarters) {

  const SETTINGS_TOTAL_INC = "J24";
  const SETTINGS_SALARY_INC = "K24";
  const SETTINGS_EXTRA_INC = "L24";
  const SETTINGS_INC_CUM_COL = "S";
  const SETTINGS_SALARY_INCOME = "J30:O37";
  const SETTINGS_EXTRA_INCOME = "J40:O51";

  const quarterIncCol = incQuarters[1];
  const quarterDataDate = incQuarters[2];
  const quarterDataEnd = incQuarters[4];
  const quarterTotalInc = incQuarters[5];
  const quarterSalaryInc = incQuarters[6];
  const quarterExtraInc = incQuarters[7];

  var data_value = ssInc.getRange(quarterTotalInc).getValue();
  var dest_range = ssSet.getRange(SETTINGS_TOTAL_INC);
  dest_range.setValue(data_value);

  data_value = ssInc.getRange(quarterSalaryInc).getValue();
  dest_range = ssSet.getRange(SETTINGS_SALARY_INC);
  dest_range.setValue(data_value);

  data_value = ssInc.getRange(quarterExtraInc).getValue();
  dest_range = ssSet.getRange(SETTINGS_EXTRA_INC);
  dest_range.setValue(data_value);

  data_value = ssInc.getRange(quarterIncCol + INC_START_ROW + ":" + quarterIncCol + INC_END_ROW).getValues();
  dest_range = ssSet.getRange(SETTINGS_INC_CUM_COL + SETTINGS_START_ROW + ":" + SETTINGS_INC_CUM_COL + SETTINGS_END_ROW);
  dest_range.setValues(data_value);

  data_value = ssInc.getRange(quarterDataDate + DATA_INC_START_ROW + ":" + quarterDataEnd + DATA_INC_END_ROW).getValues();
  dest_range = ssSet.getRange(SETTINGS_SALARY_INCOME);
  dest_range.setValues(data_value);

  data_value = ssInc.getRange(quarterDataDate + DATA_INC_EXTRA_START_ROW + ":" + quarterDataEnd + DATA_INC_EXTRA_END_ROW).getValues();
  dest_range = ssSet.getRange(SETTINGS_EXTRA_INCOME);
  dest_range.setValues(data_value);
}
