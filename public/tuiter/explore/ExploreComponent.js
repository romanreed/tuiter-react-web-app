import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="d-flex align-items-center mt-3 mb-3">
                <div class="input-group form-control-sm mr-3 rounded-pill border">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-white border-0">
                    <i class="fas fa-search"></i>
                    </span>
                </div>
                <input type="text" class="form-control border-0 rounded-pill" placeholder="Search Tuiter">
                </div>
                &nbsp; &nbsp;
                <div class="ml-3">
                <a href="#">
                    <i class="fas fa-cog fa-2x" style="color: rgb(0, 81, 255)"></i>
                </a>
                </div>
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-inline-block" href="#">Entertainment</a>
            </li>
           </ul>
           <div class="card" style="width: 100%;">
            <img src="../../images/spacexStarShip.jpg"
                 class="card-img-top">
              <div class="card-img-overlay d-flex align-items-end" style="font-size: 30px;">
                <b>SpaceX's starship</b>
              </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
