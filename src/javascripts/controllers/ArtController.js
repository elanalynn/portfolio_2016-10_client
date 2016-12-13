ArtController.$inject = ['artService']

function ArtController(artService){
  var vm = this
  artService.getArt().then(art => {
    console.log(art)
    vm.art = art
  })
}
