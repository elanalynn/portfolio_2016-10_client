angular
  .module('portfolioApp', ['ui.router', 'ngAnimate'])
  .config(config)
  .controller('ApplicationController', ApplicationController)
  .controller('AboutController', AboutController)
  .controller('ProjectsController', ProjectsController)
  .controller('ContactController', ContactController)
  .factory('messageService', messageService)
  .factory('projectsService', projectsService)
