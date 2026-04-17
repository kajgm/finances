/* Constants */
const YEAR = 2026;
const SPREADSHEETID = "1NlpL4D-Gm3XO8plHLC1Ky6u99UA7gNYRq4lRt4EmmGI";
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

/***** Overview Related Constansts *****/
const Q1_SAVE_ROW = "6";
const Q2_SAVE_ROW = "7";
const Q3_SAVE_ROW = "8";
const Q4_SAVE_ROW = "9";
const EMERG_SAVE_COL = "T";
const TFSA_SAVE_COL = "W";
const RRSP_SAVE_COL = "Z";
const FHSA_SAVE_COL = "AC";
const UNREG_SAVE_COL = "AF";

/***** Expenditure Related Constansts *****/
const EXP_START_ROW = 6;
const EXP_END_ROW = 300;

// Header cells
const Q1_EXP_TOTAL = "D3";
const Q1_EXTRA_EXP_TOTAL = "AB4";
const Q1_INC_TOTAL = "D3";
const Q1_SALARY_INC_TOTAL = "AE4";
const Q1_EXTRA_INC_TOTAL = "AF4";

const Q2_EXP_TOTAL = "J3";
const Q2_EXTRA_EXP_TOTAL = "AE4";
const Q2_INC_TOTAL = "K3";
const Q2_SALARY_INC_TOTAL = "AH4";
const Q2_EXTRA_INC_TOTAL = "AI4";

const Q3_EXP_TOTAL = "P3";
const Q3_EXTRA_EXP_TOTAL = "AH4";
const Q3_INC_TOTAL = "R3";
const Q3_SALARY_INC_TOTAL = "AK4";
const Q3_EXTRA_INC_TOTAL = "AL4";

const Q4_EXP_TOTAL = "V3";
const Q4_EXTRA_EXP_TOTAL = "AK4";
const Q4_INC_TOTAL = "Y3";
const Q4_SALARY_INC_TOTAL = "AN4";
const Q4_EXTRA_INC_TOTAL = "AO4";

// Data columns
const Q1_DATA_EXP_DATE_COL = "B";
const Q1_DATA_EXPENDITURE_COL = "D";
const Q1_DATA_EXP_CAT_COL = "E";

const Q2_DATA_EXP_DATE_COL = "H";
const Q2_DATA_EXPENDITURE_COL = "J";
const Q2_DATA_EXP_CAT_COL = "K";

const Q3_DATA_EXP_DATE_COL = "N";
const Q3_DATA_EXPENDITURE_COL = "P";
const Q3_DATA_EXP_CAT_COL = "Q";

const Q4_DATA_EXP_DATE_COL = "T";
const Q4_DATA_EXPENDITURE_COL = "V";
const Q4_DATA_EXP_CAT_COL = "W";

// Cumulative totals
const Q1_EXP_DATE_COL = "AM";
const Q1_EXP_EXPENDITURE_COL = "AN";

const Q2_EXP_DATE_COL = "AO";
const Q2_EXP_EXPENDITURE_COL = "AP";

const Q3_EXP_DATE_COL = "AQ";
const Q3_EXP_EXPENDITURE_COL = "AR";

const Q4_EXP_DATE_COL = "AS";
const Q4_EXP_EXPENDITURE_COL = "AT";


/***** Income Related Constants *****/
const INC_START_ROW = 6;
const INC_END_ROW = 300;

const DATA_INC_START_ROW = 6;
const DATA_INC_END_ROW = 13;

const DATA_INC_EXTRA_START_ROW = 18;
const DATA_INC_EXTRA_END_ROW = 29;

// Data columns
const Q1_DATA_INC_DATE_COL = "B";
const Q1_DATA_INCOME_COL = "C";
const Q1_DATA_END_COL = "G";

const Q2_DATA_INC_DATE_COL = "I";
const Q2_DATA_INCOME_COL = "J";
const Q2_DATA_END_COL = "N";

const Q3_DATA_INC_DATE_COL = "P";
const Q3_DATA_INCOME_COL = "Q";
const Q3_DATA_END_COL = "U";

const Q4_DATA_INC_DATE_COL = "W";
const Q4_DATA_INCOME_COL = "X";
const Q4_DATA_END_COL = "AB";

// Cumulative totals
const Q1_INC_DATE_COL = "AQ";
const Q1_INC_INCOME_COL = "AR";

const Q2_INC_DATE_COL = "AS";
const Q2_INC_INCOME_COL = "AT";

const Q3_INC_DATE_COL = "AU";
const Q3_INC_INCOME_COL = "AV";

const Q4_INC_DATE_COL = "AW";
const Q4_INC_INCOME_COL = "AX";


/***** Settings Related Constants *****/
const SETTINGS_START_ROW = "4";
const SETTINGS_END_ROW = "298"; // Settings and Income/Expenditures have diff starting values so it needs to be a slight offset

const SETTINGS_TOTAL_INC = "J24";
const SETTINGS_SALARY_INC = "K24";
const SETTINGS_EXTRA_INC = "L24";
const SETTINGS_TOTAL_EXP = "M24";
const SETTINGS_EXTRA_EXP = "N24";
const SETTINGS_SAVED = "J27";

const SETTINGS_CUM_DATE_COL = "Q";
const SETTINGS_EXP_CUM_COL = "R";
const SETTINGS_INC_CUM_COL = "S";

const SETTINGS_QUARTER_EXP_DATE_COL = "U";
const SETTINGS_QUARTER_EXP_AMT_COL = "V";
const SETTINGS_QUARTER_EXP_CAT_COL = "W";

const SETTINGS_EXP_DATA_DATE_COL = "Y";
const SETTINGS_EXP_DESC_COL = "Z";
const SETTINGS_EXP_AMT_COL = "AA";
const SETTINGS_EXP_CAT_COL = "AB";
const SETTINGS_EXP_MON_COL = "AC";

const SETTINGS_SALARY_INCOME = "J30:O37";
const SETTINGS_EXTRA_INCOME = "J40:O51";
