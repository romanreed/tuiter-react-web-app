const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-home"></i> <span class="d-none d-xl-inline-block">&nbsp; Home </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action active">
              <i class="fas fa-hashtag"></i><span class="d-none d-xl-inline-block">&nbsp; Explore </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-bell"></i> <span class="d-none d-xl-inline-block">&nbsp; Notifications </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-envelope"></i> <span class="d-none d-xl-inline-block">&nbsp; Messages </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-bookmark"></i> <span class="d-none d-xl-inline-block">&nbsp; Bookmarks </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-list"></i> <span class="d-none d-xl-inline-block">&nbsp; Lists </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-user"></i> <span class="d-none d-xl-inline-block">&nbsp; Profile </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <span class="fa-stack" style="font-size: 0.6em;">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fas fa-ellipsis-h fa-stack-1x" style="color: darkgray"></i>
                </span>
                <span class="d-none d-xl-inline-block">&nbsp; More </span>
            </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
export default NavigationSidebar;