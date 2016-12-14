BlogController.$inject = ['blogService', 'moment']

function BlogController(blogService, moment) {
  var vm = this
  blogService.getPosts().then(posts => vm.posts = posts.data)
}
