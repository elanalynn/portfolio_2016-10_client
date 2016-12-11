messageService.$inject = ['$http']

function projectsService($http){
  let service = {}
  service.readData = function(){
    return $http.get('../../data/projects.json')
  }
  return service
}
