var celeb = {
  "elon musk": {
    n: "assets/images/new/elonmusk.jpg",
    b: "./assets/images/new/elonmuskB.jpg"
  },
  "bill gate": {
    n: "./assets/images/new/billgates.jpg",
    b: "./assets/images/new/billgatesB.jpg"
  },
  "jeff bezos": {
    n: "./assets/images/new/jeff bezos.jpg",
    b: "./assets/images/new/jeffB.jpg"
  },
  "larry page": {
    n: "./assets/images/new/larrypage.jpeg",
    b: "./assets/images/new/larryp.jpg"
  },
  "sergey brin": {
    n: "./assets/images/new/sergeybrin.jpg",
    b: "./assets/images/new/segeybrinB.jpg"
  },
  "mark zuckerberg": {
    n: "./assets/images/new/marksuckerburg.jpg",
    b: "./assets/images/new/markzuckerbergB.jpg"
  },
  "larry ellison": {
    n: "./assets/images/new/LarryEllison.jpg",
    b: "./assets/images/new/larryeB.jpg"
  },
  "steve jobs": {
    n: "./assets/images/new/stevejobs.jpg",
    b: "./assets/images/new/stevejobsB.jpg"
  },
  "linus torvalds": {
    n: "./assets/images/new/linustorvalds.jpg",
    b: "./assets/images/new/linusB.jpg"
  },
  "jack dorsey": {
    n: "./assets/images/new/jackdorsey.jpg",
    b: "./assets/images/new/jackB.jpg"
  },
  "game over": "./assets/images/new/gameoverS.jpg"
};
var hints = {
  "elon musk": "Hint: the founder, CEO, and chief engineer/designer of SpaceX",
  "bill gate":"Hint: He is one of the best-known entrepreneurs and pioneers of the microcomputer revolution",
  "jeff bezos": "Hint: an American internet and aerospace entrepreneur",
  "larry page": "Hint: co-founders of Google",
  "sergey brin": "Hint: co-founders of Google",
  "mark zuckerberg": "Hint: co-founding and leading Facebook",
  "larry ellison":"Hint: executive chairman and chief technology officer (CTO) of Oracle Corporation",
  "steve jobs": "Hint: his middle name is Paul",
  "linus torvalds": "Hint: Finnish-American software engineer, creator of linux",
  "jack dorsey":"Hint: a computer programmer who is the co-founder and CEO of Twitter"
};

var hangs = {
  hang0: "assets/images/hang0.png",
  hang1: "assets/images/hang1.png",
  hang2: "assets/images/hang2.png",
  hang3: "assets/images/hang3.png",
  hang4: "assets/images/hang4.png",
  hang5: "assets/images/hang5.png",
  hang6: "assets/images/hang6.png",
  hang7: "assets/images/hang7.png"
};

var start = true;
var chosenCeleb = [];
var index = 10;
var occur = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var x;
var y;
var insertNewCeleb = true;
var blurImage;
var celbName;
var hint;
var score = 0;
var word=[];
var hangCount = 0 ;
var checkAnswer = false;

document.onkeyup = function(e) {
 if(!checkAnswer){
    insertNewCeleb = true;
 }
  
    // check answer
if ( !insertNewCeleb && checkAnswer){
    
      var guessedCar = e.key;
      document.getElementById(guessedCar).style.backgroundColor = "#7c82f4";
      var check = false ;
      for (c = 0; c < celbName.length; c++) {
          var caracter = celbName.charAt(c);
         
              if(caracter === guessedCar){
                  word[c] = caracter
                  check =true
              }
        
      }
      if(check){
        document.getElementById("word").innerText = word.join('');
        if(word.join('')==celbName){
            
            document.getElementById("portrait").setAttribute("src", Object.entries(celeb)[y][1].n);
            document.getElementById("msg").textContent  = "Good job! press a key to go to the next question"
            score++
            document.getElementById("scoreS").textContent = score.toString()
            word = [];
            checkAnswer = false
            if(score==10){
                document.getElementById("msg").textContent  = "Congratulations you won! press a key to play again" 
                occur = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                index = 10
                score = 0;
            }

        }
      }else{

        if(hangCount==6){
            
            console.log("game over")
            document.getElementById("msg").textContent  = "Game over press a key to play again" 
            hangCount++
            document.getElementById("hang").setAttribute("src", Object.entries(hangs)[hangCount][1]);
            hangCount = 0;
            occur = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            index = 10
            checkAnswer = false
            word = [];
            score = 0;
        }else{
            hangCount++
        document.getElementById("hang").setAttribute("src", Object.entries(hangs)[hangCount][1]);
        }
        
      
      }
     
      
    }
    // insert a question
if (index > 0 && insertNewCeleb) {
    for(i=0;i<26;i++){
        document.getElementsByClassName("unselectedKey")[i].style.backgroundColor = "#a8a9ee";
    }
    
    x = Math.floor(Math.random() * index);
    y = occur[x];
    for (i = x; i < occur.length; i++) {
      occur[i] = occur[i + 1];
    }

    index = index - 1;
    blurImage = Object.entries(celeb)[y][1].b;
    hang = Object.entries(hangs)[0][1];
    celbName = Object.entries(celeb)[y][0];
    hint = Object.entries(hints)[y][1];
    insertNewCeleb = false;
    document.getElementById("portrait").setAttribute("src", blurImage);
    document.getElementById("hang").setAttribute("src", hang);
    document.getElementById("hint").textContent = hint;
    document.getElementById("scoreS").textContent = score.toString();
    for (c = 0; c < celbName.length; c++) {
      var caracter = celbName.charAt(c);
      
      if (caracter !== " ") {
        word.push("-")
      } else {
        word.push(" ");
      }
    
    }
   
    document.getElementById("word").innerText = word.join('')
    document.getElementById("msg").textContent  = "Guess who's the person in the picture?"
    checkAnswer = true
  }


};
