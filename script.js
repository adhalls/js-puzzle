const app = Vue.createApp({
    data() {
        return {
            states: ["off", "off", "off", "off", "off", "off", "off", "off", "off"],
            functions: [this.toggleOne, this.toggleTwo, this.toggleThree, this.toggleFour, this.toggleFive, this.toggleSix, this.toggleSeven, this.toggleEight, this.toggleNine],
            completed: false,
        }
    },
    methods: {
        toggleOne() {
            if (this.completed) {
                return;
            }
            if (this.states[0] === "off") {
                this.states[0] = "on";
            } else {
                this.states[0] = "off";
            }
            if (this.states[4] === "off") {
                this.states[4] = "on";
            } else {
                this.states[4] = "off";
            }
            if (this.states[6] === "off") {
                this.states[6] = "on";
            } else {
                this.states[6] = "off";
            }
        },
        toggleTwo() {
            if (this.completed) {
                return;
            }
            if (this.states[1] === "off") {
                this.states[1] = "on";
            } else {
                this.states[1] = "off";
            }
            if (this.states[7] === "off") {
                this.states[7] = "on";
            } else {
                this.states[7] = "off";
            }
        },
        toggleThree() {
            if (this.completed) {
                return;
            }
            if (this.states[2] === "off") {
                this.states[2] = "on";
            } else {
                this.states[2] = "off";
            }
            if (this.states[4] === "off") {
                this.states[4] = "on";
            } else {
                this.states[4] = "off";
            }
            if (this.states[7] === "off") {
                this.states[7] = "on";
            } else {
                this.states[7] = "off";
            }
        },
        toggleFour() {
            if (this.completed) {
                return;
            }
            if (this.states[3] === "off") {
                this.states[3] = "on";
            } else {
                this.states[3] = "off";
            }
            if (this.states[0] === "off") {
                this.states[0] = "on";
            } else {
                this.states[0] = "off";
            }
            if (this.states[5] === "off") {
                this.states[5] = "on";
            } else {
                this.states[5] = "off";
            }
            if (this.states[8] === "off") {
                this.states[8] = "on";
            } else {
                this.states[8] = "off";
            }
        },
        toggleFive() {
            if (this.completed) {
                return;
            }
            if (this.states[4] === "off") {
                this.states[4] = "on";
            } else {
                this.states[4] = "off";
            }
            if (this.states[6] === "off") {
                this.states[6] = "on";
            } else {
                this.states[6] = "off";
            }
        },
        toggleSix() {
            if (this.completed) {
                return;
            }
            if (this.states[5] === "off") {
                this.states[5] = "on";
            } else {
                this.states[5] = "off";
            }
            if (this.states[0] === "off") {
                this.states[0] = "on";
            } else {
                this.states[0] = "off";
            }
        },
        toggleSeven() {
            if (this.completed) {
                return;
            }
            if (this.states[6] === "off") {
                this.states[6] = "on";
            } else {
                this.states[6] = "off";
            }
            if (this.states[1] === "off") {
                this.states[1] = "on";
            } else {
                this.states[1] = "off";
            }
        },
        toggleEight() {
            if (this.completed) {
                return;
            }
            if (this.states[7] === "off") {
                this.states[7] = "on";
            } else {
                this.states[7] = "off";
            }
            if (this.states[3] === "off") {
                this.states[3] = "on";
            } else {
                this.states[3] = "off";
            }
            if (this.states[2] === "off") {
                this.states[2] = "on";
            } else {
                this.states[2] = "off";
            }
        },
        toggleNine() {
            if (this.completed) {
                return;
            }
            if (this.states[8] === "off") {
                this.states[8] = "on";
            } else {
                this.states[8] = "off";
            }
        },
        isComplete() {
            for (let state of this.states) {
                if (state === "off"){
                    return;
                }
            }
            this.completed = true;
        },

    },
});
const vm = app.mount("#body")