import MenuHeader from "./MenuHeader.tsx";
import MenuList from "./MenuList.tsx";
import Container from "../container/container.tsx";


function Menu() {
    return (
        <div className={"mt-40 lg:mt-20 relative"}>
            <Container>
            <MenuHeader/>
            <MenuList/>

            </Container>
        </div>
    );
}

export default Menu;