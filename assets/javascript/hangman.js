//1. select a word randomly
var outerSpace = {
    win:0,
    spaceWord: [ "saturn", "jupiter", "venus", "uranus", "sun", "cosmic", "galaxies", "stellar", "celestial", "mercury", "sirius"],
    
    //Getting a random word from the spaceWord array
    randomWord: function(){
        var result = Math.floor(Math.random() * this.spaceWord.length);
        var word = this.spaceWord[result]
        return word;
    },
    
    guessesLeft: 9,
    // Grabbing ID from the DOM by passing id as a parameter
    grabId: function(element){
        var grab =document.getElementById(element);
        return grab;
    },

    // Output data to the DOM with first parameter id, and second values
    output: function(el, val){
        this.grabId(el).textContent = val;
    }
    
};


// Outputting values to the current word!
var word = outerSpace.randomWord();
console.log(word);
outerSpace.grabId("spaceWord").textContent = word;

//The array of letters from the random word
var arr = word.split('');

//console.log(arr);

//----- replacing every single letter
var piece = [];

// Looping or mapping over the letters of the random word
arr.map(function(element){
    var result = element.replace(element, '-------');
    piece.push(result);
});

console.log(piece);

// Outputting it to the DOM
outerSpace.output('spaceWord', piece);
//console.log(piece);

//console.log(arr.length);
//console.log(piece.length);


}





// Do this when the user is pressing a button
document.onkeyup = function(event){
  
   // Outputting the key letter to the DOM in the already guessed 
   var typing = document.createTextNode(event.key +',');
   outerSpace.grabId("Guessed").appendChild(typing);

    arr.map(function(element, index){
        
        if(element === event.key){
            
            
            outerSpace.grabId('win').textContent = "Your score is  " + outerSpace.win++;
            console.log(element);
            piece[index] = element;
        }

     //   else{
       //     outerSpace.grabId('numGuesses').textContent = "Your chances remaining " outerSpace.numGuesses--;
         //   console.log("it did not match!");
       // }

    });

console.log(piece);

};


    //var keyData = event.key;

    
    //var para = document.createElement("P");

    //var data = document.createTextNode(event.key);

    //var result = para.appendChild(data);



    //outerSpace.grabId('Guessed').appendChild(para);
  



 //outerSpace.output('Guessed', event.key);





