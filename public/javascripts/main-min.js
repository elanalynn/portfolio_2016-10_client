"use strict";function config(t,e){e.otherwise("/projects"),t.state("root",{views:{"":{abstract:!0,templateUrl:"/partials/layout.html"},"header@root":{templateUrl:"/partials/header.html"},"footer@root":{templateUrl:"/partials/footer.html"}}}).state("root.about",{url:"/about",views:{main:{templateUrl:"partials/about.html",controller:"AboutController",controllerAs:"vm"}}}).state("root.art",{url:"/art",views:{main:{templateUrl:"partials/art.html",controller:"ArtController",controllerAs:"vm"}}}).state("root.contact",{url:"/contact",views:{main:{templateUrl:"partials/contact.html",controller:"ContactController",controllerAs:"vm"}}}).state("root.blog",{url:"/blog",views:{main:{templateUrl:"partials/posts.html",controller:"BlogController",controllerAs:"vm"}}}).state("root.resources",{url:"/resources",views:{main:{templateUrl:"partials/resources.html",controller:"ResourcesController",controllerAs:"vm"}}}).state("root.projects",{url:"/projects",views:{main:{templateUrl:"./partials/projects.html",controller:"ProjectsController",controllerAs:"vm"}}}).state("root.collabowrite",{url:"/projects/collabowrite",views:{main:{templateUrl:"partials/project.html",controller:"ProjectsController",controllerAs:"vm"}}}).state("root.stumblr",{url:"/projects/stumblr",views:{main:{templateUrl:"partials/project.html",controller:"ProjectsController",controllerAs:"vm"}}}).state("root.planit",{url:"/projects/planit",views:{main:{templateUrl:"partials/project.html",controller:"ProjectsController",controllerAs:"vm"}}}).state("root.weeks",{url:"/projects/weeks",views:{main:{templateUrl:"partials/project.html",controller:"ProjectsController",controllerAs:"vm"}}})}function AboutController(){var t=this;t.thing="about controller"}function ApplicationController(t){var e=this;e.state=t}function ArtController(t){var e=this;t.getPictures().then(function(t){console.log(t),e.pictures=t})}function BlogController(t){var e=this;t.getPosts().then(function(t){return e.posts=t.data})}function ContactController(t){var e=this;e.message={},e.sendMessage=function(r){t.sendMessage(r).then(function(t){e.confirmation=t.data,e.message={}})}}function ProjectsController(t,e){var r=this;console.log(e.current.name),t.getProjects().then(function(t){switch(r.projectList=t.data,e.current.name){case"root.collabowrite":r.projectIndex=0;break;case"root.stumblr":r.projectIndex=1;break;case"root.planit":r.projectIndex=2;break;case"root.reasonabout":r.projectIndex=4;break;case"root.weeks":r.projectIndex=3;break;default:r.projectIndex=0}return r.getTech=function(t){r.technologies=r.projectList[t].technologies.split(" ")},r.getFeatures=function(t){r.features=r.projectList[t].features.split(", ")},r.getTech(r.projectIndex),r.getFeatures(r.projectIndex),r.projectsList})}function ResourcesController(t){var e=this;t.getArt().then(function(t){console.log(t),e.resources=t})}function artService(t){var e={};return e.getPictures=function(){return t.get("../../data/pictures.json")},e}function blogService(t){var e={};return e.getPosts=function(){return t.get("../../data/posts.json")},e}function messageService(t,e){var r={};return r.sendMessage=function(e){return t.post("https://portfolio-service.herokuapp.com/messages",e)},r}function projectsService(t){var e={};return e.getProjects=function(){return t.get("../../data/projects.json")},e}function resourcesService(t){var e={};return e.getResources=function(){return t.get("../../data/resources.json")},e}angular.module("portfolioApp",["ui.router","ngAnimate"]).config(config).factory("messageService",messageService).factory("projectsService",projectsService).factory("resourcesService",resourcesService).factory("artService",artService).factory("blogService",blogService).controller("ApplicationController",ApplicationController).controller("AboutController",AboutController).controller("ProjectsController",ProjectsController).controller("ContactController",ContactController).controller("ResourcesController",ResourcesController).controller("ArtController",ArtController).controller("BlogController",BlogController),config.$inject=["$stateProvider","$urlRouterProvider"],AboutController.$inject=[],ApplicationController.$inject=["$state"],ArtController.$inject=["artService"],BlogController.$inject=["blogService"],ContactController.$inject=["messageService"],ProjectsController.$inject=["projectsService","$state"],ResourcesController.$inject=["resourcesService"],artService.$inject=["$http"],blogService.$inject=["$http"],messageService.$inject=["$http","$location"],projectsService.$inject=["$http"],resourcesService.$inject=["$http"];