
import {getMenu} from "../../services/apiRestaurant"
import { useLoaderData } from 'react-router-dom';
import MenuItem from "./MenuItem";
import { Box } from "@mui/material";
function Menu() {
    const menu = useLoaderData()
    console.log(menu);
    
  return (
    <Box >
   {menu.map((item)=>{
     return <MenuItem item={item} key={item.id}/>
    })
    }
    </Box>
  )
}


export async function loader(){
    const menu = await getMenu();
    return menu
}
export default Menu
