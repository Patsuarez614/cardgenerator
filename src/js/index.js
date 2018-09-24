import '../style/index.scss';

window.onload = () => {
    var card = document.querySelector('.card');
    var top = document.querySelector('.top-suit').innerHTML = generateRandomSuit(0,3);
    var bottom = document.querySelector('.bottom-suit').innerHTML = top;
    var number = document.querySelector('.number').innerHTML = generateRandomNumber(0,13);
};    

var generateRandomNumber = () => {
    var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    var indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
};
var generateRandomSuit = () => {     
      var suit = ["\u2660","\u2663","\u2665","\u2666"];
      var indexSuit = Math.floor(Math.random() * suit.length);
     return suit[indexSuit];
};
     