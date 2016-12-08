function ProjectsController(projectsService, $state){
  var vm = this

  projectsService.readData()
  .then(projects => {
    vm.projectList = projects.data

    switch ($state.current.name) {
      case 'collabowrite': vm.projectIndex = 0
        break
      case 'stumblr': vm.projectIndex = 1
        break
      case 'planit': vm.projectIndex = 2
        break
      case 'reasonabout': vm.projectIndex = 4
        break
      case 'weeks': vm.projectIndex = 3
        break
      default: vm.projectIndex = 0

    }

    vm.getTech = projectIndex => {
      vm.technologies = vm.projectList[projectIndex].technologies.split(', ')
    }

    vm.getTech(vm.projectIndex)

    return vm.projectsList
  })

}
