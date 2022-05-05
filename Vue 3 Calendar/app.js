Vue.createApp({
    data() {
      return {
        currentDate: new Date().getUTCDate(),
        currentMonth:new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      }
    },
    methods: {
      daysInMonth() {
        return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      },
      startDay() {
        return new Date(this.currentYear, this.currentMonth, 1).getDay();
      },
      next() {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.currentYear++;
        } else {
          this.currentMonth++;
        }
      },
      prev() {
        if (this.currentMonth === 0) {
          this.currentMonth = 11;
          this.currentYear--;
        } else {
          this.currentMonth--;
        }
      },
      currentDateClass(num) {
        const calenderFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
        const currentFullDate = new Date().toDateString();
        return calenderFullDate === currentFullDate ? "current__date" : "";
      }
    },
    computed: {
      currentMonthName() {
        return new Date(this.currentYear, this.currentMonth).toLocaleString("en-US", { month: "long"});
      }
    }
}).mount('#app')