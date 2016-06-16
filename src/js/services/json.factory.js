// сервис(фабрика) для получения данных из json
'use strict';
module.exports = function jsonApi($http) {
  function fetch(jsonPath) {
    return $http.get(jsonPath);
  }
  function parse(response, objKey) {
    // ответ содержит массив массивов фильмов
    if (Array.isArray(response.data[objKey][0])) {
      var filmsOutput = [];
      for (var filmsGroupId in response.data[objKey]) {
        for (var filmId in response.data[objKey][filmsGroupId]) {
          filmsOutput.push(response.data[objKey][filmsGroupId][filmId]);
        }
      }
      return filmsOutput;
    }
    // ответ содержит массив фильмов
    else {
      return response.data[objKey];
    }
  }
  function switchPosterSize(imgPath, imgWidth) {
    if (imgPath) {
      return imgPath.replace('iphone60', 'iphone' + imgWidth).replace('iphone90', 'iphone' + imgWidth);
    }
    else {
      return "images/movies/poster_none.png";
    }
  }
  return {
    fetch: fetch,
    parse: parse,
    switchPosterSize: switchPosterSize
  };
}