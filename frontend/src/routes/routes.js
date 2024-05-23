import SiteRoot from "../pages/site/SiteRoot";
import Add from "../pages/site/add/Add";
import Basket from "../pages/site/basket/Basket";
import Home from "../pages/site/home/Home";
import Shop from "../pages/site/shop/Shop";

const ROUTES = [{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },{
        path:"add",
        element:<Add/>
    },{
        path:"shop",
        element:<Shop/>
    },{
        path:"basket",
        element:<Basket/>
    }]
}]

export default ROUTES