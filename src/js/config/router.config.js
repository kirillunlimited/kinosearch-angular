'use strict';
module.exports = function routerConfig($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : 'js/views/index.html'
    })
    .when("/today", {
      templateUrl : 'js/views/films_catalog.html',
      controller: 'TodayController',
      controllerAs: 'filmsCtrl'
    })
    .when("/soon", {
      templateUrl : 'js/views/films_catalog.html',
      controller: 'SoonController',
      controllerAs: 'filmsCtrl'
    })
    .when("/film/:filmID", {
      templateUrl : 'js/views/film_description.html',
      controller: 'FilmController',
      controllerAs: 'filmCtrl'
    })
    .when("/seances/:filmID", {
      templateUrl : 'js/views/film_seances.html',
      controller: 'SeancesController',
      controllerAs: 'seancesCtrl'
    })
    .when("/cinema/:cinemaID", {
      templateUrl : 'js/views/cinema_description.html',
      controller: 'CinemaController',
      controllerAs: 'cinemaCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}