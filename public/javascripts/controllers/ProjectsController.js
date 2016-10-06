function ProjectsController(projectsService){
  var vm = this
  vm.projectList = getProjects()

  function getProjects() {
    return projectsService.readData()
      .then(projects => {
        vm.projectList = projects.data
      })
  }


}
