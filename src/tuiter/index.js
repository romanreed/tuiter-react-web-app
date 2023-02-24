import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
 return (
   <div className="row mt-2">
     <div className="col-3 col-lg-2 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-9 col-lg-6"
          style={{"position": "relative"}}>
       <ExploreComponent/>
     </div>
     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <WhoToFollowList/>
     </div>
   </div>
 );
}

export default Tuiter