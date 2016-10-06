function ProjectsController(projectsService){
  var vm = this
  vm.thing = 'elaalalala'
  vm.projectList = getProjects()

  function getProjects() {
    return projectsService.readData()
      .then(projects => {
        vm.projectList = projects.data
      })
  }


}
