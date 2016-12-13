ResourcesController.$inject = ['resourcesService']

function ResourcesController(resourcesService){
  var vm = this
  resourcesService.getResources().then(resources => {
    console.log(resources)
    vm.resources = resources
  })
}
