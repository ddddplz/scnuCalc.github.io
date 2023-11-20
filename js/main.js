import methods from './methods.js';

const savedData = localStorage.getItem('scnuData');
new Vue({
    el: "#app",
    data() {
        return {
            gender: 'boy',
            grade: 'lowGrade',
            input: '',
            tips: [
                '身高，单位cm',
                '体重，单位kg',
                '肺活量，单位mL',
                '跳远距离，单位cm',
                '体前屈长度，单位cm',
                '秒数',
                '分.秒 例：3.40',
                '个数'
            ],
            tableData: [
                {
                    item: '身高/cm',
                    data: '',
                    step: 0.001
                },
                {
                    item: '体重/kg(15%)',
                    data: '',
                    score: '0',
                    step: 0.001,
                },
                {
                    item: '肺活量/mL(15%)',
                    data: '',
                    score: '0',
                    step: 1,
                },
                {
                    item: '立定跳远/cm(10%)',
                    data: '',
                    score: '0',
                    step: 1,
                },
                {
                    item: '坐位体前屈/cm(10%)',
                    data: undefined,
                    score: '0',
                    step: 0.1,
                },
                {
                    item: '50米/s(20%)',
                    data: undefined,
                    score: '0',
                    step: 0.001,
                },
                {
                    item: '1000米/s(20%)',
                    data: undefined,
                    score: '0',
                    step: 0.01,
                },
                {
                    item: '引体向上/个(10%)',
                    data: '',
                    score: '0',
                    step: 1,
                },
            ]
        }
    },
    created() {
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            Object.assign(this, parsedData);
        }
    },
    computed: {
        totalScore() {
            var table = this.tableData;
            var result = 0;
            var score1 = parseFloat(table[1].score);
            var score2 = parseFloat(table[2].score);
            var score3 = parseFloat(table[3].score);
            var score4 = parseFloat(table[4].score);
            var score5 = parseFloat(table[5].score);
            var score6 = parseFloat(table[6].score);
            var score7 = parseFloat(table[7].score);

            result = (score1 + score2) * 0.15 +
                (score5 + score6) * 0.2 +
                (score3 + score4 + score7) * 0.1;

            return result.toFixed(2);
        },
        extraScores() {
            const longRunData = Math.floor(this.tableData[6].data) * 60 +
                (this.tableData[6].data % 1) * 100;
            return methods.extraScore(this.tableData[7].data, longRunData,
                this.gender, this.grade);
        },

        bmiScores() {
            const height = this.tableData[0].data / 100;
            const weight = this.tableData[1].data;

            if (height != '' && height != undefined && weight != '' && weight != undefined) {
                return methods.bmiScore(height, weight, this.gender);
            }
            return 0;
        },
        lungScore() {
            const lungData = this.tableData[2].data;
            if (this.gender == 'boy') {
                return methods.lungBoyScore(lungData, this.grade);
            } else {
                return methods.lungGirlScore(lungData, this.grade);
            }
        },

        jumpScore() {

            const jumpData = Math.floor(this.tableData[3].data);
            if (this.gender == 'boy') {
                return methods.jumpBoyScore(jumpData, this.grade);
            } else {
                return methods.jumpGirlScore(jumpData, this.grade);
            }
        },

        sitAndReachScore() {
            const sitAndReachData = this.tableData[4].data;
            if (this.gender == 'boy') {
                return methods.sitAndReachBoyScore(sitAndReachData, this.grade);
            } else {
                return methods.sitAndReachGirlScore(sitAndReachData, this.grade);
            }
        },
        fiftyRunScore() {
            const fiftyRunData = this.tableData[5].data;
            if (this.gender == 'boy') {
                return methods.fiftyRunBoyScore(fiftyRunData, this.grade);
            } else {
                return methods.fiftyRunGirlScore(fiftyRunData, this.grade);
            }
        },

        longRunScore() {
            const longRunData = Math.floor(this.tableData[6].data) * 60 +
                (this.tableData[6].data % 1) * 100; //转化成秒
            if (this.gender == 'boy') {
                return methods.longRunBoyScore(longRunData, this.grade);
            } else {
                return methods.longRunGirlScore(longRunData, this.grade);
            }
        },
        pullOrSitUpScore() {
            const pullOrSitUpData = Math.floor(this.tableData[7].data);
            if (this.gender == 'boy') {
                return methods.pullUpScore(pullOrSitUpData, this.grade);
            } else {
                return methods.sitUpScore(pullOrSitUpData, this.grade);
            }
        },


    },
    watch: {

        bmiScores() {
            this.tableData[1].score = this.bmiScores;
        },
        lungScore() {
            this.tableData[2].score = this.lungScore;
            if (isNaN(this.tableData[2].score)) {
                this.tableData[2].score = 0;
            }
        },
        jumpScore() {
            this.tableData[3].score = this.jumpScore;
            if (isNaN(this.tableData[3].score)) {
                this.tableData[3].score = 0;
            }
        },
        sitAndReachScore() {
            this.tableData[4].score = this.sitAndReachScore;
            if (isNaN(this.tableData[4].score)) {
                this.tableData[4].score = 0;
            }
        },
        fiftyRunScore() {
            this.tableData[5].score = this.fiftyRunScore;
            if (isNaN(this.tableData[5].score)) {
                this.tableData[5].score = 0;
            }
        },
        longRunScore() {
            this.tableData[6].score = this.longRunScore;
            if (isNaN(this.tableData[6].score)) {
                this.tableData[6].score = 0;
            }
        },
        pullOrSitUpScore() {
            this.tableData[7].score = this.pullOrSitUpScore;
            if (isNaN(this.tableData[7].score)) {
                this.tableData[7].score = 0;
            }
        },

        gender() {
            var meter, item;
            if (this.gender == 'boy') {
                meter = '1000';
                item = '引体向上';
            } else {
                meter = '800';
                item = '仰卧起坐';
            }
            this.tableData[6].item = meter + '米/s(20%)';
            this.tableData[7].item = item + '/个(10%)';
        }

    },
    methods: {
        ...methods,
        handleInputChange(row) {
            // 检查输入框的值是否为空
            if (row.data === null || row.data === undefined || row.data === '') {
                // 如果为空，则将输入框的值设置为默认值
                this.$set(row, 'data', undefined);
            }
            this.savedData();
        },
        savedData() {
            const dataToSave = {
                gender: this.gender,
                grade: this.grade,
                tableData: this.tableData,
            };
            localStorage.setItem('scnuData', JSON.stringify(dataToSave));
        }, 
    }
})




