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


outerSpace.grabId("spaceWord").textContent = outerSpace.randomWord;


document.onkeyup = function(event){
   
   var typing = document.createTextNode(event.key +',');
   outerSpace.grabId("Guessed").appendChild(typing);

};


    //var keyData = event.key;

    
    //var para = document.createElement("P");

    //var data = document.createTextNode(event.key);

    //var result = para.appendChild(data);



    //outerSpace.grabId('Guessed').appendChild(para);
  



 //outerSpace.output('Guessed', event.key);





