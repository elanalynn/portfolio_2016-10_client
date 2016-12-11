config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  })
  $urlRouterProvider.otherwise('/projects')
  $stateProvider
  .state('root',{
    url: '',
    abstract: true,
    views: {
      'header': { templateUrl: './partials/header.html' },
      'footer':{ templateUrl: './partials/footer.html' },
    },
  })
  .state('root.about', {
    url: '/about',
    templateUrl: 'partials/about.html',
    controller: 'AboutController',
    controllerAs: 'vm',
  })
  .state('root.contact', {
    url: '/contact',
    templateUrl: 'partials/contact.html',
    controller: 'ContactController',
    controllerAs: 'vm',
  })
  .state('root.resources', {
    url: '/resources',
    templateUrl: 'partials/resources.html',
    controller: 'ResourcesController',
    controllerAs: 'vm',
  })
  .state('root.projects', {
    url: '/projects',
    templateUrl: 'partials/projects.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('root.projects.collabowrite', {
    url: '/projects/collabowrite',
    templateUrl: 'partials/projects/collabowrite.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('root.projects.stumblr', {
    url: '/projects/stumblr',
    templateUrl: 'partials/projects/stumblr.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('root.projects.planit', {
    url: '/projects/planit',
    templateUrl: 'partials/projects/planit.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('root.projects.weeks', {
    url: '/projects/weeks',
    templateUrl: 'partials/projects/weeks.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
  .state('root.projects.reasonabout', {
    url: '/projects/reasonabout',
    templateUrl: 'partials/projects/reasonabout.html',
    controller: 'ProjectsController',
    controllerAs: 'vm',
  })
}
