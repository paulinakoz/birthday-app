class Birthday {
    constructor(day, month, name){
        this.day = Number(day);
        this.month = month;
        this.name = name;
        this.monthsArray = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    }

    getMonth(){
        return this.monthsArray.indexOf(this.month) + 1;
    }

    isBirthday(){
        let today = new Date();
        let todaysDay = today.getDate();
        let month = today.getMonth() + 1;
        if(this.day === todaysDay && this.getMonth() === month){
            return `Happy Birthday ${this.name}! 🥳`;
        } else {
            let birthday = [this.day, this.getMonth()]
            let bday = new Date(today.getFullYear(),birthday[1]-1,birthday[0]);
            if( today.getTime() > bday.getTime()) {
                bday.setFullYear(bday.getFullYear()+1);
            }
            let difference = bday.getTime() - today.getTime();
            let days = Math.floor(difference / (1000*60*60*24));
            return `Your birthday will be in ${days} days, ${this.name}! 🗓`
        }
    }
}

module.exports = Birthday;