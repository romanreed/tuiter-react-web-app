import PostSummaryItem from "./PostSummaryItem.js";
import Posts from "./Posts.js"
const PostSummaryList = () => {
   return (`
           <ul class="list-group">
            ${
                Posts.map(post => {
                return(PostSummaryItem(post));
                }).join('')
            }
           </ul>
`); }
export default PostSummaryList;