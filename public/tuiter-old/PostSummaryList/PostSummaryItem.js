const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item d-flex ps-3 p-2 justify-content-between">
        <div>
            <span style="color: gray">${post.topic}</span> <br>
            <b>${post.userName}</b> <i class="fas fa-check-circle"></i>
            <span style="color: gray"> - ${post.time}</span><br>
            <b>${post.title}</b> <br>
            <span style="color: gray">${post.tweets ? post.tweets : ''} ${post.tweets ? "Tweets": ''}</span>
        </div>
        <div>
            <img src="${post.image}" class="rounded" style="width: 90px; height: 90px;">
        </div>
    </li>`
    );
  }
export default PostSummaryItem;


