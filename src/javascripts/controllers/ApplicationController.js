ApplicationController.$inject = ['$state']

function ApplicationController($state) {
  var vm = this

  vm.state = $state
}
