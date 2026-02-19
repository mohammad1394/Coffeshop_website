import MenuItems from "./MenuItems.tsx";
import {menuData} from "../../data/menuData.ts";


function MenuList() {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto my-10"}>
            {
                menuData.map((item ,index ) => (
                    <MenuItems key={index} {...item}/>
                ))
            }
        </div>
    );
}

export default MenuList;