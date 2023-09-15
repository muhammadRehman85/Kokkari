import React from 'react';
import Menu from './manueapi'
import MenuData from './MenuData';
import Dish from './DishApi';
import DishMenu from './DishMenu';
import Footer from './Footer';
function Cuisine() {
  return (
    <div>

<MenuData menuData={Menu}/>
<DishMenu dishData={Dish} />
<Footer/>
    </div>
  )
}

export default Cuisine;