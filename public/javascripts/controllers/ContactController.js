ContactController.$inject = ['messageService']

function ContactController(messageService) {
  var vm = this
  vm.message = {}
  vm.sendMessage = (message) => {
    console.log('sendMessage', message)
    messageService.sendMessage(message)
    .then(confirmation => {
      console.log(confirmation)
    })
  }
}
