import React from "react";
import TuitsList from "../tuits/tuit-list";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import WhatsHappening from "./whats-happening";
import whoReducer
  from "../reducers/who-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

function HomeComponent () {
 return (
    <Provider store={store}>
    <div className="row mt-2">
        <div className="col-3 col-lg-2 col-xl-2">
            <NavigationSidebar active="explore"/>
        </div>
        <div className="col-9 col-lg-6"
                style={{"position": "relative"}}>
              <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
        </div>
    </div>
    </Provider>
 );
}

export default HomeComponent