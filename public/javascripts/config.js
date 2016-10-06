function config($stateProvider, $urlRouterProvider) {
  //$locationProvider - inject
  // $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/projects')
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'partials/about.html',
    controller: 'AboutController',
    controllerAs: 'vm',
  })
  .state('projects', {
    url: '/projects',
    templateUrl: 'partials/projects.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('blog', {
    url: '/blog',
    templateUrl: 'partials/blog.html',
    controller: 'BlogController',
    controllerAs: 'vm',
  })
  .state('collabowrite', {
    url: '/projects/collabowrite',
    templateUrl: 'partials/projects/collabowrite.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('stumblr', {
    url: '/projects/stumblr',
    templateUrl: 'partials/projects/stumblr.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('planit', {
    url: '/projects/planit',
    templateUrl: 'partials/projects/planit.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('weeks', {
    url: '/projects/weeks',
    templateUrl: 'partials/projects/weeks.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('reasonabout', {
    url: '/projects/reasonabout',
    templateUrl: 'partials/projects/reasonabout.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('contact', {
    url: '/projects/contact',
    templateUrl: 'partials/contact.html',
    controller: 'ContactController',
    controllerAs: 'vm',
  })
  .state('resources', {
    url: '/projects/resources',
    templateUrl: 'partials/resources.html',
    controller: 'ResourcesController',
    controllerAs: 'vm',
  })
}
