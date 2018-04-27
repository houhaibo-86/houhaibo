import React from "react";


import Sandwiches from "../component/Sandwiches";
import Tacos from "../component/Tacos";
import Bus from "../component/Bus";
import Cart from "../component/Cart";
import Main from "../component/Main";

////////////////////////////////////////////////////////////
// then our route config
const Routes = [
    {
        path: "/main",
        component: Main
      },
    {
      path: "/sandwiches",
      component: Sandwiches
    },
    {
      path: "/tacos",
      component: Tacos,
      routes: [
        {
          path: "/tacos/bus",
          component: Bus
        },
        {
          path: "/tacos/cart",
          component: Cart
        }
      ]
    }
  ];


  export default Routes;