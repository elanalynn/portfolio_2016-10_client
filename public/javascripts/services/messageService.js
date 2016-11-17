messageService.$inject = ['$http', '$location']

function messageService($http, $location){
  let service = {}
  service.sendMessage = (message) => {
    console.log('messageService', message)
    return $http.post('https://portfolio-service.herokuapp.com/messages', message)
  }
  return service
}
