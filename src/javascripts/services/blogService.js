blogService.$inject = ['$http']

function blogService($http){
  let service = {}
  service.getPosts = () => $http.get('../../data/posts.json')
  return service
}
