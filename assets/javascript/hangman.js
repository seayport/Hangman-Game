//1. select a word randomly
var outerSpace = {
    win:0,
    spaceWord: [ "saturn", "jupiter", "venus", "uranus", "sun", "cosmic", "galaxies", "stellar", "celestial", "mercury", "sirius"],
    
    randomWord: function(){
        var result = Math.floor(Math.random() * this.spaceWord.length);
        var word = this.spaceWord[result]
        return word;
    },
    
    guessesLeft: 9,

    grabId: function(element){
        var grab =document.getElementById(element);
        return grab;
    },

    output: function(el, val){
        this.grabId(el).textContent = val;
    }
    
};





document.onkeyup = function(event){
   outerSpace.output('Guessed', event.key);
};








