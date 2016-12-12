angular
  .module('portfolioApp', ['ui.router', 'ngAnimate'])
  .config(config)
  .factory('messageService', messageService)
  .factory('projectsService', projectsService)
  .controller('ApplicationController', ApplicationController)
  .controller('AboutController', AboutController)
  .controller('ProjectsController', ProjectsController)
  .controller('ContactController', ContactController)
