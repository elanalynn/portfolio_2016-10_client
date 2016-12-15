BlogController.$inject = ['blogService', '$stateParams', '$sce']

function BlogController(blogService, $stateParams, $sce) {
  var vm = this
  blogService.getPosts().then(posts => vm.posts_2016 = posts.data)
  blogService.getPost($stateParams.id)
  .then(posts => {
    return posts.data.forEach(post => {
      if (post.id == Number.parseInt($stateParams.id)) {
        vm.post = post
        blogService.getPostBody(vm.post.link)
        .then(body => {
          vm.post.body = $sce.trustAsHtml(body.data)
        })
      }
    })
  })
}
