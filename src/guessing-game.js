class GuessingGame {
    constructor() {
        this.max;
        this.min;
        this.medium;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        if(this.range==null){
            this.medium = Math.ceil((this.min+this.max) / 2);
            return this.medium;
        }else{
            return this.medium;
        }
    }
    lower(){
        this.max= this.medium;
        this.medium = Math.ceil((this.min+this.medium)/2);
        return this.medium;
    }

    greater() {
        this.min= this.medium;
        this.medium = Math.ceil((this.max+this.medium)/2);
        return this.medium;
    }
}

module.exports = GuessingGame;
