'use strict';

angular.module('portfolioApp', ['ui.router', 'angularMoment']).config(config).factory('artService', artService).factory('blogService', blogService).factory('messageService', messageService).factory('projectsService', projectsService).controller('AboutController', AboutController).controller('ApplicationController', ApplicationController).controller('ArtController', ArtController).controller('BlogController', BlogController).controller('ContactController', ContactController).controller('ProjectsController', ProjectsController);
'use strict';

config.$inject = ['$stateProvider', '$urlRouterProvider']; //'$locationProvider'

function config($stateProvider, $urlRouterProvider) {
  // $locationProvider
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false,
  // })
  $urlRouterProvider.otherwise('/projects');
  $stateProvider.state('root', {
    views: {
      '': {
        abstract: true,
        templateUrl: '/partials/layout.html'
      },
      'header@root': {
        templateUrl: '/partials/header.html'
      },
      'footer@root': {
        templateUrl: '/partials/footer.html'
      }
    }
  }).state('root.about', {
    url: '/about',
    views: {
      'main': {
        templateUrl: 'partials/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      }
    }
  }).state('root.art', {
    url: '/art',
    views: {
      'main': {
        templateUrl: 'partials/art.html',
        controller: 'ArtController',
        controllerAs: 'vm'
      }
    }
  }).state('root.contact', {
    url: '/contact',
    views: {
      'main': {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      }
    }
  }).state('root.posts', {
    url: '/posts',
    views: {
      'main': {
        templateUrl: 'partials/posts.html',
        controller: 'BlogController',
        controllerAs: 'vm'
      }
    }
  }).state('root.post', {
    url: '/post/:id',
    views: {
      'main': {
        templateUrl: 'partials/post.html',
        controller: 'BlogController',
        controllerAs: 'vm'
      }
    }
  }).state('root.projects', {
    url: '/projects',
    views: {
      'main': {
        templateUrl: './partials/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      }
    }
  }).state('root.collabowrite', {
    url: '/projects/collabowrite',
    views: {
      'main': {
        templateUrl: 'partials/project.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      }
    }
  }).state('root.stumblr', {
    url: '/projects/stumblr',
    views: {
      'main': {
        templateUrl: 'partials/project.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      }
    }
  }).state('root.planit', {
    url: '/projects/planit',
    views: {
      'main': {
        templateUrl: 'partials/project.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      }
    }
  }).state('root.weeks', {
    url: '/projects/weeks',
    views: {
      'main': {
        templateUrl: 'partials/project.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      }
    }
  });
}
'use strict';

AboutController.$inject = [];

function AboutController() {
  var vm = this;
  vm.thing = 'about controller';
}
'use strict';

ApplicationController.$inject = ['$state'];

function ApplicationController($state) {
  var vm = this;

  vm.state = $state;
}
'use strict';

ArtController.$inject = ['artService'];

function ArtController(artService) {
  var vm = this;
  artService.getPictures().then(function (pictures) {
    console.log(pictures);
    vm.pictures = pictures;
  });
}
'use strict';

BlogController.$inject = ['blogService', '$stateParams', '$sce'];

function BlogController(blogService, $stateParams, $sce) {
  var vm = this;
  blogService.getPosts().then(function (posts) {
    return vm.posts_2016 = posts.data;
  });
  blogService.getPost($stateParams.id).then(function (posts) {
    return posts.data.forEach(function (post) {
      if (post.id == Number.parseInt($stateParams.id)) {
        vm.post = post;
        blogService.getPostBody(vm.post.link).then(function (body) {
          vm.post.body = $sce.trustAsHtml(body.data);
        });
      }
    });
  });
}
'use strict';

ContactController.$inject = ['messageService'];

function ContactController(messageService) {
  var vm = this;
  vm.message = {};
  vm.sendMessage = function (message) {
    messageService.sendMessage(message).then(function (confirmation) {
      vm.confirmation = confirmation.data;
      vm.message = {};
    });
  };
}
'use strict';

ProjectsController.$inject = ['projectsService', '$state'];

function ProjectsController(projectsService, $state) {
  var vm = this;

  console.log($state.current.name);

  projectsService.getProjects().then(function (projects) {
    vm.projectList = projects.data;

    switch ($state.current.name) {
      case 'root.collabowrite':
        vm.projectIndex = 0;
        break;
      case 'root.stumblr':
        vm.projectIndex = 1;
        break;
      case 'root.planit':
        vm.projectIndex = 2;
        break;
      case 'root.reasonabout':
        vm.projectIndex = 4;
        break;
      case 'root.weeks':
        vm.projectIndex = 3;
        break;
      default:
        vm.projectIndex = 0;
    }

    vm.getTech = function (projectIndex) {
      vm.technologies = vm.projectList[projectIndex].technologies.split(' ');
    };

    vm.getFeatures = function (projectIndex) {
      vm.features = vm.projectList[projectIndex].features.split(', ');
    };

    vm.getTech(vm.projectIndex);
    vm.getFeatures(vm.projectIndex);

    return vm.projectsList;
  });
}
'use strict';

artService.$inject = ['$http'];

function artService($http) {
  var service = {};
  service.getPictures = function () {
    return $http.get('../../data/pictures.json');
  };
  return service;
}
'use strict';

blogService.$inject = ['$http'];

function blogService($http) {
  var service = {};

  service.getPosts = function () {
    return $http.get('../../data/posts.json');
  };
  service.getPost = function (id) {
    return $http.get('../../data/posts.json');
  };
  service.getPostBody = function (link) {
    return $http.get(link);
  };

  return service;
}
'use strict';

messageService.$inject = ['$http', '$location'];

function messageService($http, $location) {
  var service = {};
  service.sendMessage = function (message) {
    return $http.post('https://portfolio-service.herokuapp.com/messages', message);
  };
  return service;
}
'use strict';

projectsService.$inject = ['$http'];

function projectsService($http) {
  var service = {};
  service.getProjects = function () {
    return $http.get('../../data/projects.json');
  };
  return service;
}