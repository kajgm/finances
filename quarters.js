/***** Functions related to gathering quarterly columns/rows *****/

function _getCurrentSavedQuarterRow(date){

    const Q1_SAVE_ROW = "6";
    const Q2_SAVE_ROW = "7";
    const Q3_SAVE_ROW = "8";
    const Q4_SAVE_ROW = "9";
    const quarterInt = Math.floor((date.getMonth() + 3) / 3);
    var savedRow = "";

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

const Q1_EXP_DATE_COL = "AM";
const Q1_EXP_EXPENDITURE_COL = "AN";
const Q1_DATA_EXP_DATE_COL = "B";
const Q1_DATA_EXPENDITURE_COL = "D";
const Q1_DATA_EXP_CAT_COL = "E";
const Q1_EXP_TOTAL = "D3";
const Q1_EXTRA_EXP_TOTAL = "AB4";

const Q2_EXP_DATE_COL = "AO";
const Q2_EXP_EXPENDITURE_COL = "AP";
const Q2_DATA_EXP_DATE_COL = "H";
const Q2_DATA_EXPENDITURE_COL = "J";
const Q2_DATA_EXP_CAT_COL = "K";
const Q2_EXP_TOTAL = "J3";
const Q2_EXTRA_EXP_TOTAL = "AE4";

const Q3_EXP_DATE_COL = "AQ";
const Q3_EXP_EXPENDITURE_COL = "AR";
const Q3_DATA_EXP_DATE_COL = "N";
const Q3_DATA_EXPENDITURE_COL = "P";
const Q3_DATA_EXP_CAT_COL = "Q";
const Q3_EXP_TOTAL = "P3";
const Q3_EXTRA_EXP_TOTAL = "AH4";

const Q4_EXP_DATE_COL = "AS";
const Q4_EXP_EXPENDITURE_COL = "AT";
const Q4_DATA_EXP_DATE_COL = "T";
const Q4_DATA_EXPENDITURE_COL = "V";
const Q4_DATA_EXP_CAT_COL = "W";
const Q4_EXP_TOTAL = "V3";
const Q4_EXTRA_EXP_TOTAL = "AK4";

function _getCurrentExpQuarterCol(date){



    const quarterInt = Math.floor((date.getMonth() + 3) / 3);

    var dateCol = "";
    var expCol = "";
    var dataDate = "";
    var dataExp = "";
    var dataCat = "";
    var expTotal = "";
    var expExtra = "";

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

const Q1_INC_DATE_COL = "AQ";
const Q1_INC_INCOME_COL = "AR";
const Q1_DATA_INC_DATE_COL = "B";
const Q1_DATA_INCOME_COL = "C";
const Q1_DATA_END_COL = "G";
const Q1_INC_TOTAL = "D3";
const Q1_SALARY_INC_TOTAL = "AE4";
const Q1_EXTRA_INC_TOTAL = "AF4";

const Q2_INC_DATE_COL = "AS";
const Q2_INC_INCOME_COL = "AT";
const Q2_DATA_INC_DATE_COL = "I";
const Q2_DATA_INCOME_COL = "J";
const Q2_DATA_END_COL = "N";
const Q2_INC_TOTAL = "K3";
const Q2_SALARY_INC_TOTAL = "AH4";
const Q2_EXTRA_INC_TOTAL = "AI4";

const Q3_INC_DATE_COL = "AU";
const Q3_INC_INCOME_COL = "AV";
const Q3_DATA_INC_DATE_COL = "P";
const Q3_DATA_INCOME_COL = "Q";
const Q3_DATA_END_COL = "U";
const Q3_INC_TOTAL = "R3";
const Q3_SALARY_INC_TOTAL = "AK4";
const Q3_EXTRA_INC_TOTAL = "AL4";

const Q4_INC_DATE_COL = "AW";
const Q4_INC_INCOME_COL = "AX";
const Q4_DATA_INC_DATE_COL = "W";
const Q4_DATA_INCOME_COL = "X";
const Q4_DATA_END_COL = "AB";
const Q4_INC_TOTAL = "Y3";
const Q4_SALARY_INC_TOTAL = "AN4";
const Q4_EXTRA_INC_TOTAL = "AO4";

function _getCurrentIncQuarterCol(date){



    const quarterInt = Math.floor((date.getMonth() + 3) / 3);

    var dateCol = "";
    var incCol = "";
    var dataDate = "";
    var dataInc = "";
    var dataEnd = "";
    var incTotal = "";
    var incSalary = "";
    var incExtra = "";

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
