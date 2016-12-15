blogService.$inject = ['$http']

function blogService($http){
  let service = {}

  service.getPosts = () => $http.get('../../data/posts.json')
  service.getPost = id => $http.get('../../data/posts.json')
  service.getPostBody = link => $http.get(link)

  return service
}
