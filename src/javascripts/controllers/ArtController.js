ArtController.$inject = ['artService']

function ArtController(artService){
  var vm = this
  artService.getPictures().then(pictures => {
    console.log(pictures)
    vm.pictures = pictures
  })
}
