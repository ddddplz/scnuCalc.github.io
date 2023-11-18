export default {
    lungBoyScore(data, grade) {  //返回男生肺活量分数
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data < 3200) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 2300;
                deltaData = 160;
            } else {
                lowestData = 2350;
                deltaData = 170;
            }

        }
        else if (data < 4400) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 120;
            lowestData = grade == 'lowGrade' ? 3100 : 3200;
        }
        else if (data < 4900) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 250;
            lowestData = grade == 'lowGrade' ? 4300 : 4400;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 120;
            lowestData = grade == 'lowGrade' ? 4800 : 4900;
        }
        return this.dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore);


    },
    lungGirlScore(lung, grade) {
        var lowestLung;
        var deltaLung;
        var deltaScore;
        var lowestScore;
        if (lung < 2050) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestLung = 1800;
            } else {
                lowestLung = 1850;
            }
            deltaLung = 40;

        }
        else if (lung < 3050) {
            lowestScore = 60;
            deltaScore = 2;
            deltaLung = 100;
            lowestLung = grade == 'lowGrade' ? 2000 : 2050;
        }
        else if (lung < 3350) {
            lowestScore = 80;
            deltaScore = 5;
            deltaLung = 150;
            lowestLung = grade == 'lowGrade' ? 3000 : 3050;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaLung = 50;
            lowestLung = grade == 'lowGrade' ? 3300 : 3350;
        }
        return this.dataGetScore(lung, lowestLung, deltaLung, lowestScore, deltaScore);
    },

    jumpBoyScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data < 210) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 183;
            } else {
                lowestData = 185;
            }
            deltaData = 5;

        }
        else if (data < 250) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 4;
            lowestData = grade == 'lowGrade' ? 208 : 210;
        }
        else if (data < 265) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 8;
            lowestData = grade == 'lowGrade' ? 248 : 250;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 5;
            lowestData = grade == 'lowGrade' ? 263 : 265;
        }
        return this.dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore);
    },
    jumpGirlScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data < 152) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 126;
            } else {
                lowestData = 127;
            }
            deltaData = 5;

        }
        else if (data < 182) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 3;
            lowestData = grade == 'lowGrade' ? 151 : 152;
        }
        else if (data < 196) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 7;
            lowestData = grade == 'lowGrade' ? 181 : 182;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 6;
            lowestData = grade == 'lowGrade' ? 195 : 196;
        }
        return this.dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore);
    },

    sitAndReachBoyScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data < 4.2) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = -1.3;
            } else {
                lowestData = -0.8;
            }
            deltaData = 1;

        }
        else if (data < 18.2) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 1.4;
            lowestData = grade == 'lowGrade' ? 3.7 : 4.2;
        }
        else if (data < 21.5) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = grade == 'lowGrade' ? 1.8 : 1.7;
            lowestData = grade == 'lowGrade' ? 17.7 : 18.2;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 1.8;
            lowestData = grade == 'lowGrade' ? 21.3 : 21.5;
        }
        return this.dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore);
    },
    sitAndReachGirlScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data < 6.5) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 2;
            } else {
                lowestData = 2.5
            }
            deltaData = 0.8;

        }
        else if (data < 19.5) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 1.3;
            lowestData = grade == 'lowGrade' ? 6 : 6.5;
        }
        else if (data < 22.4) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 1.6;
            lowestData = grade == 'lowGrade' ? 19 : 19.5;
        } else {
            if (grade == 'highGrade') {
                if (data >= 26.3) {              //特殊数据，不符合规律特殊处理
                    return 100;
                }
            }
            lowestScore = 90;
            deltaScore = 5;
            deltaData = grade == 'lowGrade' ? 1.8 : 2;
            lowestData = grade == 'lowGrade' ? 22.2 : 22.4;
        }
        return this.dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore);
    },

    fiftyRunBoyScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data >9) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 10.1;
            } else {
                lowestData = 10;
            }
            deltaData = 0.2;

        }
        else if (data >7) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 0.2;
            lowestData = grade == 'lowGrade' ? 9.1 : 9;
        }
        else if (data > 6.8) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 0.1;
            lowestData = grade == 'lowGrade' ? 7.1 : 7;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 0.1;
            lowestData = grade == 'lowGrade' ? 6.9 : 6.8;
        }
        return this.dataGetScore(-data, -lowestData, deltaData, lowestScore, deltaScore);
    },


//-9.1 -10.1 0.2 10 10 
    dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore) {
        if (data < lowestData) {
            return 0;
        }
        var dataTemp = data - lowestData + deltaData;
        
        //+0.01 防止 1/3*3=0.9999999 
        var result = parseInt(dataTemp / deltaData+0.01 - 1) * deltaScore + lowestScore;

        return result > 100 ? 100 : result;
    }

}
