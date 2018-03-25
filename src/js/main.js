window.addEventListener('load', function () {

  var canvas = document.getElementById('canvas');
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;

  var context = canvas.getContext('2d');
  var userInputText = document.getElementById('userInputText');
  var graphGenerateButton = document.getElementById('graphGenerateButton');
  var detailLog = document.getElementById('detailLog');

  var removeWhiteSpaceFrom = function (str) {
    strSliced = str.split("");
    strTrimmed = [];
    for (var i = 0; i < strSliced.length; i++) {
      if (strSliced[i] !== " ") {
        strTrimmed.push(strSliced[i]);
      }
    }
    return strTrimmed.join("");
  };

  var parser = function (text) {
    var userInputTextTrimmed = removeWhiteSpaceFrom(text.value);
    if (removeWhiteSpaceFrom(userInputText.value) === '') {
      detailLog.innerHTML = 'কিছু একটা তো ইনপুটে লিখতে হবে নাকি? :-| '
    } else if (!userInputTextTrimmed.includes('x')) {
      detailLog.innerHTML = 'আমি তো x -এর ফাংশনই না ভাই! আমার গ্রাফটা হবে কিভাবে? :-( '
    } else if (userInputTextTrimmed.includes('y')) {
      detailLog.innerHTML = 'ওহহো! আমি তো y-এর ফাংশন! প্রথমে আমাকে x-এর ফাংশন বানাও, তারপর ক্লিক কর!'
    } else {
      detailLog.innerHTML = 'এবার আমার গ্রাফটা তৈরি করার চেষ্টা করছি দাঁড়াও';
      termsArrayPlus = userInputTextTrimmed.split('+');
      termsArrayMinus = userInputTextTrimmed.split('-');

      var isBig = function () {
        if (termsArrayPlus.length > 2 || termsArrayMinus.length > 2) {
          return true;
        }
        else {
          for (var i = 0; i < termsArrayPlus.length; i++) {
            if (termsArrayPlus[i].includes('-')) {
              return true;
            }
          }
          for (var i = 0; i < termsArrayMinus.length; i++) {
            if (termsArrayMinus[i].includes('+')) {
              return true;
            }
          }
        }
        return false;
      };

      if (isBig()) {
        detailLog.innerHTML = 'দু\'টোর বেশি রাশি লিখলে যে? আমার যোগ-বিয়োগ করার সময় নেই ভাই! ';


      }
    }
  };

  graphGenerateButton.addEventListener('click', function () {
    parser(userInputText);
  });

  var plot = function (x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }
  var drawYAxes = function () {
    var x1 = parseInt(canvas.width / 2);
    var y1 = 0;
    var x2 = parseInt(canvas.width / 2);
    var y2 = canvas.height;
    plot(x1, y1, x2, y2);

  }

  var drawXAxes = function () {
    var x1 = 0;
    var y1 = parseInt(canvas.height / 2);
    var x2 = canvas.width;
    var y2 = parseInt(canvas.height / 2);
    plot(x1, y1, x2, y2);
  }




  drawXAxes()
  drawYAxes();



});

