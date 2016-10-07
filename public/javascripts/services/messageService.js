function messageService($http){
  let service = {}
  service.sendMessage = function(message){
    return $http.post('https://localhost:3000/api/', message)
  }
  return service
}
