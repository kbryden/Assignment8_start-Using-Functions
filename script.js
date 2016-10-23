//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

//this function displays the author and speech year when each button is clicked.
function getAuthorAndYearString(authorName, speechYear) {
  document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + (authorName) + ' in ' + (speechYear) + '.<br>';
};

//this function displays whether or not the speech took place before or after common era when each button is clicked.
function displayBCEString(speechYearIsBCE){
    if([speechYearIsBCE] === true){
    document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place before the common era.'+ '<br>');
  }else{
    document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place during the common era.'+ '<br>');
  }
};

//this function displays whether or not the speech is the oldest or youngest on the page.
function getOldestOrYoungestString(speechYear){
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

    if(speechYear === oldest){
    document.getElementById("ConsoleDisplay").innerHTML += ('This is the oldest speech on the page.'+ '<br>');
  }
    if(speechYear === newest){
    document.getElementById("ConsoleDisplay").innerHTML += ('This is the most recent speech on the page.'+ '<br>');
  }
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  donatePrompt = window.prompt('How much would you like to donate?');

    if (donatePrompt < 100) {
      var newHeading = document.createElement ("h3");
      var h3Text = document.createTextNode("Thank you for your donation of $" + donatePrompt);
      newHeading.appendChild(h3Text);
      document.getElementById ("SideNav").appendChild(newHeading);
    } else if (donatePrompt >= 100) {
      var newHeading = document.createElement ("h3");
      var h3Text = document.createTextNode("Thank you for your very generous donation!");
      newHeading.appendChild(h3Text);
      document.getElementById("SideNav").appendChild(newHeading);
      newHeading.setAttribute("style","color:#ff0000");

      var articleName = document.getElementsByTagName("article");
        for (var i = 0; i < articleName.length; i += 1 ) {
          articleName[i].className = "generous-donation";
    }
  }

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  getAuthorAndYearString(speechesArray[0].author, speechesArray[0].year);
  
  displayBCEString(speechesArray[0].yearIsBCE);

  getOldestOrYoungestString(speechesArray[0].year);  
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  getAuthorAndYearString(speechesArray[1].author, speechesArray[1].year);
  
  displayBCEString(speechesArray[1].yearIsBCE);

  getOldestOrYoungestString(speechesArray[1].year); 
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
   getAuthorAndYearString(speechesArray[2].author, speechesArray[2].year);

   displayBCEString(speechesArray[2].yearIsBCE);

  getOldestOrYoungestString(speechesArray[2].year); 
});