// сервис для работы с датами
'use strict';
module.exports = function dateService() {
  this.getToday = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    }
    if(mm<10) {
        mm='0'+mm;
    }
    today = dd+'.'+mm+'.'+yyyy;
    return today;
  };

  // формирование массива дней для заполнения выпадающего списка
  this.getDaysList = function() {
    var days = [];
    for (var i = 0; i < 7; i++) {
      var day = new Date();
      day.setDate(day.getDate() + i);
      var dd = day.getDate();
      var mm = day.getMonth() + 1; //January is 0!
      var yyyy = day.getFullYear();
      if(dd<10) {
          dd='0'+dd;
      }
      if(mm<10) {
          mm='0'+mm;
      }
      day = dd+'.'+mm+'.'+yyyy;
      days.push(day);
    }
    return days;
  };
};