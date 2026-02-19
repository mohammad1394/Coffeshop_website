import Container from "../container/container.tsx";
import navbarBackground from "../../assets/image/hero.png"
import NavbarHeader from "./NavbarHeader.tsx";
import NavbarMain from "./NavbarMain.tsx";


function Navbar() {
    return (

                <div className=" h-[120vh] bg-no-repeat relative bg-cover bg-center text-white font-[Tanha]" style={{ backgroundImage: `url(${navbarBackground})` }}>
                    <Container>
                    <NavbarHeader/>
                    <NavbarMain/>

                    </Container>
                </div>

    );
}

export default Navbar;