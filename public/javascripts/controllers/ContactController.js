ContactController.$inject = ['messageService']

function ContactController(messageService) {
  var vm = this
  vm.message = {}
  vm.sendMessage = (message) => {
    messageService.sendMessage(message)
    .then(confirmation => {
      vm.confirmation = confirmation.data
      vm.message = {}
    })
  }
}
