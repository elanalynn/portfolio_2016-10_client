resourcesService.$inject = ['$http']

function resourcesService($http){
  let service = {}
  service.getResources = () => $http.get('../../data/resources.json')
  return service
}
