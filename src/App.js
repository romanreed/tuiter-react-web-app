import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Home from "./tuiter/home";
import Assignment7 from "./labs/a7";
import {BrowserRouter} from "react-router-dom";

import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
   <div className="container">
       <Routes>
           <Route path="/*" element={<Labs/>}/>
           <Route path="/hello"
                  element={<HelloWorld/>}/>
           <Route path="/tuiter"
                  element={<Tuiter/>}/>
            <Route path="/home"
                  element={<Home/>}/>
           <Route path="/*" element={<Assignment7/>}/>
       </Routes>
   </div>
</BrowserRouter>
  );
}
export default App;