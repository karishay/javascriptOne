var Cat = function(){
    return {
    tiredness: 10,
    hunger: 10,
    loneliness: 10,
    happiness: 10,
    obedience: 0,
    sleeping: function(time){
        console.log("zzzzzzzzhu");
        this.tiredness = this.tiredness - time;
        this.hunger =  this.hunger + (time/2);
    },
    feeding: function(foodType){
        if(foodType =="Human") {
            console.log("mmmmmmmm");
            this.hunger = this.hunger - 5;
        }
        else if(foodType =="Cat") {
            console.log("meh");
            this.hunger = this.hunger - 1;
        }
        else {
            console.log("meow");
        }
    },
    petting: function(){
        if(Math.random() > 0.5) {
            console.log("purrrrrrrrr");
            this.happiness = this.happiness + 5;
            this.loneliness =  this.loneliness - 5;
        }
        else {
            console.log("HSSSSSSSSSSSSS");
            this.happiness = this.happiness - 5;
        }
    },
    laserPointing: function(){
        console.log("scratch scratch scratch, meow?");
        this.happiness = this.happiness + 3;
        this.obedience = this.obedience - 2;
        this.tiredness = this.tiredness - 5;
        this.hunger = this.hunger + 5;
    },
    catHerding: function(){
        console.log("HSSSSSSSSSSSSS.");
        return false;
    },
    catStatus: function(){
        console.log("tiredness: "+this.tiredness);
        console.log("hunger: "+this.hunger);
        console.log("loneliness: "+this.loneliness);
        console.log("happiness: "+this.happiness);
        console.log("obedience: "+this.obedience);
    },
    catShaming: function(){
        console.log("HSSSSSSSSSS");
        this.obedience = this.obedience + 1;
        this.happiness = this.happiness - 5;
    }

};
};

Cat.catStatus();