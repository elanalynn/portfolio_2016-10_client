angular
  .module('portfolioApp', ['ui.router', 'ngAnimate'])
  .config(config)
  .controller('MainController', ['$state', MainController])
  .controller('AboutController', AboutController)
  .controller('ProjectsController', ProjectsController)
  .controller('ContactsController', ContactController)
  .factory('projectsService', projectsService)
