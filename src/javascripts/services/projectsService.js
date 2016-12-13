projectsService.$inject = ['$http']

function projectsService($http){
  let service = {}
  service.getProjects = () => $http.get('../../data/projects.json')
  return service
}
