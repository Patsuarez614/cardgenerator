import '../style/index.scss';

window.onload = () => {
    document.querySelector('.card').classList.add(generateRandomSuit());
    document.querySelector('.card').classList.add(generateRandomNumber());
};    

var generateRandomNumber = () => {
    var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    var indexNumbers = Math.floor(Math.random() * numbers.length);
    return[indexNumbers];
};
var generateRandomSuit = () => {     
      var suit = ["\u2660","\u2663","\u2665","\u2666"];
      var indexSuit = Math.floor(Math.random() * suit.length);
     return suit[indexSuit];
};
     