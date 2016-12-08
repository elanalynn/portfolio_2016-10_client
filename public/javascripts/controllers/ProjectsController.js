function ProjectsController(projectsService){
  var vm = this
  projectsService.readData()
  .then(projects => {
    vm.projectList = projects.data
    return vm.projectsList
  })
}
