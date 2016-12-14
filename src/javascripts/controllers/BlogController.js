BlogController.$inject = ['blogService']

function BlogController(blogService) {
  var vm = this
  blogService.getPosts().then(posts => vm.posts = posts.data)
}
