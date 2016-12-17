ProjectsController.$inject = ['projectsService', '$state']

function ProjectsController(projectsService, $state){
  var vm = this

  projectsService.getProjects().then(projects => {
    vm.projectList = projects.data

    switch ($state.current.name) {
      case 'root.collabowrite': vm.projectIndex = 0
        break
      case 'root.stumblr': vm.projectIndex = 1
        break
      case 'root.planit': vm.projectIndex = 2
        break
      case 'root.reasonabout': vm.projectIndex = 4
        break
      case 'root.weeks': vm.projectIndex = 3
        break
      default: vm.projectIndex = 0
    }

    vm.getTech = projectIndex => {
      vm.technologies = vm.projectList[projectIndex].technologies.split(' ')
    }

    vm.getFeatures = projectIndex => {
      vm.features = vm.projectList[projectIndex].features.split(', ')
    }

    vm.getTech(vm.projectIndex)
    vm.getFeatures(vm.projectIndex)

    return vm.projectsList
  })
}
