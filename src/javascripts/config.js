config.$inject = ['$stateProvider', '$urlRouterProvider'] //'$locationProvider'

function config($stateProvider, $urlRouterProvider) { // $locationProvider
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false,
  // })
  $urlRouterProvider.otherwise('/projects')
  $stateProvider
  .state('root', {
    views: {
      '': {
        abstract: true,
        templateUrl: '/partials/layout.html',
      },
      'header@root': {
        templateUrl: '/partials/header.html',
      },
      'footer@root': {
        templateUrl: '/partials/footer.html',
      },
    },
   })
  .state('root.about', {
    url: '/about',
    views: {
      'main': {
        templateUrl: 'partials/about.html',
        controller: 'AboutController',
        controllerAs: 'vm',
      },
    },
  })
  .state('root.contact', {
    url: '/contact',
    views: {
      'main': {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
      },
    },
  })
  .state('root.resources', {
    url: '/resources',
    views: {
      'main': {
        templateUrl: 'partials/resources.html',
        controller: 'ResourcesController',
        controllerAs: 'vm',
      },
    },
  })
  .state('root.projects', {
    url: '/projects',
    views: {
      'main': {
        templateUrl: './partials/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'vm',
      },
    },
  })
  .state('root.collabowrite', {
    url: '/projects/collabowrite',
    views: {
      'main': {
        templateUrl: 'partials/projects/collabowrite.html',
        controller: 'ProjectsController',
        controllerAs: 'vm',
      },
    },
  })
  .state('root.stumblr', {
    url: '/projects/stumblr',
    views: {
      'main': {
        templateUrl: 'partials/projects/stumblr.html',
        controller: 'ProjectsController',
        controllerAs: 'vm',
      },
    },
  })
  .state('root.planit', {
    url: '/projects/planit',
    views: {
      'main': {
        templateUrl: 'partials/projects/planit.html',
        controller: 'ProjectsController',
        controllerAs: 'vm',
      },
    },
  })
  .state('root.weeks', {
    url: '/projects/weeks',
    views: {
      'main': {
        templateUrl: 'partials/projects/weeks.html',
        controller: 'ProjectsController',
        controllerAs: 'vm',
      },
    },
  })
}
