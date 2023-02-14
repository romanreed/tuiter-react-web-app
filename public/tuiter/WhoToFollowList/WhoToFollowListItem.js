const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="d-flex">
            <img src="../../images/${who.avatarIcon}" alt="Placeholder" class="rounded-circle mr-3" style="width: 50px; height: 50px;">
            &nbsp; &nbsp;
            <div class="d-flex flex-column text-nowrap">
            <div><b>${who.userName}</b> <i class="fas fa-check-circle"></i></div>
            <div>@${who.handle}</div>
            </div>
        </div>
        <a href="#" class="btn rounded-pill btn-primary">Follow</a>
    </li>`
    );
  }
  export default WhoToFollowListItem;