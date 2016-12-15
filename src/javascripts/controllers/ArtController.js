ArtController.$inject = ['artService']

function ArtController(artService){
  var vm = this
  artService.getPictures().then(pictures => {
    vm.pictures = pictures.data
  })
}
