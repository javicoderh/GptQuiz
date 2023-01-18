import { HashRouter,Route, Routes } from "react-router-dom";
import Index from "../index/main";

function Router() {

 return (
 
 <HashRouter>
  <Routes> 
  <Route path="/" element={<Index />}/>
  </Routes>
 </HashRouter>
 ) 
 }
 
 export default Router

