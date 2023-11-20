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

        if (data > 9) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 10.1;
            } else {
                lowestData = 10;
            }
            deltaData = 0.2;

        }
        else if (data > 7) {
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
    fiftyRunGirlScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data > 10.2) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 11.3;
            } else {
                lowestData = 11.2;
            }
            deltaData = 0.2;

        }
        else if (data > 8.2) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 0.2;
            lowestData = grade == 'lowGrade' ? 10.3 : 10.2;
        }
        else if (data > 7.6) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 0.3;
            lowestData = grade == 'lowGrade' ? 8.3 : 8.2;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 0.1;
            lowestData = grade == 'lowGrade' ? 7.7 : 7.6;
        }
        return this.dataGetScore(-data, -lowestData, deltaData, lowestScore, deltaScore);
    },
    longRunBoyScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data > 272) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 372;
            } else {
                lowestData = 370;
            }
            deltaData = 20;

        }
        else if (data > 222) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 5;
            lowestData = grade == 'lowGrade' ? 272 : 270;
        }
        else if (data > 209) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 8;
            lowestData = grade == 'lowGrade' ? 222 : 220;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 5;
            lowestData = grade == 'lowGrade' ? 207 : 205;
        }
        return this.dataGetScore(-data, -lowestData, deltaData, lowestScore, deltaScore);
    },
    longRunGirlScore(data, grade) {
        var lowestData;
        var deltaData;
        var deltaScore;
        var lowestScore;

        if (data > 274) {
            lowestScore = 10;
            deltaScore = 10;
            if (grade == 'lowGrade') {
                lowestData = 324;
            } else {
                lowestData = 322;
            }
            deltaData = 10;

        }
        else if (data > 224) {
            lowestScore = 60;
            deltaScore = 2;
            deltaData = 5;
            lowestData = grade == 'lowGrade' ? 274 : 272;
        }
        else if (data > 210) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 7;
            lowestData = grade == 'lowGrade' ? 224 : 222;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            deltaData = 6;
            lowestData = grade == 'lowGrade' ? 210 : 208;
        }
        return this.dataGetScore(-data, -lowestData, deltaData, lowestScore, deltaScore);
    },
    pullUpScore(data, grade) {
        var lowestData;
        var deltaData = 1;
        var deltaScore;
        var lowestScore;
        var extraScore = 0;
        var maxData;
        if (data < 11) {
            lowestScore = 10;
            deltaScore = 10;
            lowestData = grade == 'lowGrade' ? 5 : 6;
        }
        else if (data < 16) {
            lowestScore = 60;
            deltaScore = 4;
            lowestData = grade == 'lowGrade' ? 10 : 11;
        }
        else if (data < 18) {
            lowestScore = 80;
            deltaScore = 5;
            lowestData = grade == 'lowGrade' ? 15 : 16;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            lowestData = grade == 'lowGrade' ? 17 : 18;

            if (data > maxData) {            //额外加分
                extraScore = data - maxData
            }
        }
        return this.dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore);
    },
    sitUpScore(data, grade) {
        var lowestData;
        var deltaData = 2;
        var deltaScore;
        var lowestScore;

        if (data < 27) {
            lowestScore = 10;
            deltaScore = 10;
            lowestData = grade == 'lowGrade' ? 16 : 17;
        }
        else if (data < 47) {
            lowestScore = 60;
            deltaScore = 2;
            lowestData = grade == 'lowGrade' ? 26 : 27;
        }
        else if (data < 53) {
            lowestScore = 80;
            deltaScore = 5;
            deltaData = 3;
            lowestData = grade == 'lowGrade' ? 46 : 47;
        } else {
            lowestScore = 90;
            deltaScore = 5;
            lowestData = grade == 'lowGrade' ? 52 : 53;
        }
        return this.dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore);
    },

    bmiScore(height, weight, gender) {
        var t1 = 17.1, t2 = 23.9, t3 = 27.9;
        var score;
        if (gender == 'boy') {
            t1 = 17.8;
            t2 = 23.9;
            t3 = 27.9;
        }

        var bmi = weight / (height * height);
        bmi = Math.round(bmi * 10) / 10;  //四舍五入保留1位小数

        if (bmi <= t1) {
            score = 80;
        } else if (bmi <= t2) {
            score = 100;
        } else if (bmi <= t3) {
            score = 80;
        } else {
            score = 60;
        }
        return score;

    },
   
    dataGetScore(data, lowestData, deltaData, lowestScore, deltaScore) {
        if (data < lowestData) {
            return 0;
        }
        var dataTemp = data - lowestData + deltaData;

        //+0.001 防止 1/3*3=0.9999999 
        var result = Math.floor(dataTemp / deltaData + 0.001 - 1) * deltaScore + lowestScore;
        return result > 100 ? 100 : result;
    },
    extraScore(pullOrSitUpData, longRunData, gender, grade) {
        var maxData1;
        var maxData2;
        var result1;
        var result2;
        if (gender == 'boy') {
            if (grade == 'lowGrade') {
                maxData1 = 19;
                maxData2 = 197;
            } else {
                maxData1 = 20;
                maxData2 = 195;
            }

            result1 = pullOrSitUpData - maxData1;

            result2 = maxData2 - longRunData;
            if (result2 >= 4) {
                if (result2 < 23) {
                    result2 = Math.floor(result2 / 4);
                } else {
                    result2 = 5 + Math.floor((result2 - 20) / 3);
                }
            } else {
                result2 = 0;
            }
        } else {                                   //女孩
            if (grade == 'lowGrade') {
                maxData1 = 56;
                maxData2 = 198;
            } else {
                maxData1 = 57;
                maxData2 = 196;
            }

            result1 = pullOrSitUpData - maxData1;
            if (result1 >= 2) {
                if (result1 < 7) {
                    result1 = Math.floor(result1 / 2);
                } else {
                    result1 -= 3;
                }
            } else {
                result1 = 0;
            }

            result2 = maxData2 - longRunData;
            result2 = Math.floor(result2 / 5);
        }
        //保证在0-10以内
        result1 = result1 > 10 ? 10 : result1;
        result1 = result1 > 0 ? result1 : 0

        result2 = result2 > 10 ? 10 : result2;
        result2 = result2 > 0 ? result2 : 0

        return result1 + result2;
    }


}
