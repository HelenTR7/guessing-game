class GuessingGame {

    constructor(start=0, finish=0) { 
        this.start=start;
        this.finish=finish;
    }

    setRange(min, max) {
      this.start=min;
      this.finish=max;

    }

    guess() {
      var solut=0;
      var i=this.start;
      var j=this.finish;
      solut=Math.ceil((i+j)/2);
      return solut; 
    }

    lower() {

      var i=this.start;
      var j=this.finish;    
      this.finish=Math.ceil((i+j)/2);
 
    }

    greater() {
      var i=this.start;
      var j=this.finish;    
      this.start=Math.ceil((i+j)/2);
 
    }
}
module.exports = GuessingGame;
