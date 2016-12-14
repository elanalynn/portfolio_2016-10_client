artService.$inject = ['$http']

function artService($http){
  let service = {}
  service.getPictures = () => $http.get('../../data/pictures.json')
  return service
}
