artService.$inject = ['$http']

function artService($http){
  let service = {}
  service.getArt = () => $http.get('../../data/art.json')
  return service
}
