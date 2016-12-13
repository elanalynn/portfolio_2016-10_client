ResourcesController.$inject = ['resourcesService']

function ResourcesController(resourcesService){
  var vm = this
  resourcesService.getArt().then(resources => {
    console.log(resources)
    vm.resources = resources
  })
}
