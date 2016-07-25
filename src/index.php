<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Киношка</title>
  <link rel="stylesheet" href="css/main.css" />
  <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
  <script src="app/app.js"></script>
  <!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body class="page" ng-app="app" ng-cloak>
  <nav class="page__navigation navigation">
    <ul class="navigation__menu menu">
      <li class="menu__item"><a class="menu__link" ui-sref="afisha.today">Афиша</a></li>
      <li class="menu__item"><a class="menu__link" ui-sref="search">Поиск</a></li>
    </ul>
  </nav>
  <div class="page__content content">
    <div class="content__wrapper" ui-view></div>
    <footer class="page__footer footer">
      <div class="footer__element">Сделано с помощью <a href="https://angularjs.org/"><img class="footer__img" src="img/angular.png" alt="Angular JS"/></a></div>
    </footer>
  </div>
</body>
</html>
