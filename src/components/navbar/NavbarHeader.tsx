import Button from "../button/Button.tsx";
import { IoMenu } from "react-icons/io5";
import {useState} from "react";
import NavbarSideBar from "./NavbarSideBar.tsx";

function NavbarHeader() {

    const [menuisOpen, setMenuOpen] = useState<boolean>(false);

    function toggleMenu() {
        setMenuOpen(!menuisOpen);
    }


    return (

        <div className="flex flex-row-reverse justify-between py-5">
            <div className={"hidden md:flex"}>
                کافه گوشه
            </div>
            <div className={"visible md:hidden text-[20px]"} onClick={toggleMenu}>
                <IoMenu />
            </div>
            <NavbarSideBar menuisOpen = {menuisOpen} toggleMenu = {toggleMenu} />
            <div className={"hidden md:flex"}>
                <ul className={"flex flex-row-reverse"}>
                    <li className={"ml-10"}>
                        خانه
                    </li>
                    <li className={"ml-10"}>
                        منو
                    </li>
                    <li className={"ml-10"}>
                       درباره ما
                    </li>
                    <li className={"ml-10"}>
                        ارتباط با ما
                    </li>
                </ul>
            </div>
            <div className={"flex flex-row-reverse hidden md:flex"}>
                <Button className={"ml-5"}>
                    ثبت نام
                </Button>
                <button>
                    ورود
                </button>
            </div>
        </div>

    );
}

export default NavbarHeader;