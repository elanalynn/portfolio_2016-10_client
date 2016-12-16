ArtController.$inject = ['artService', '$stateParams']

function ArtController(artService, $stateParams){
  var vm = this
  artService.getPictures().then(pictures => vm.pictures = pictures.data)
  artService.getPictures($stateParams.id)
  .then(pictures => {
    return pictures.data.forEach(picture => {
      if (picture.id == Number.parseInt($stateParams.id)) {
        vm.picture = picture
      }
    })
  })
}
