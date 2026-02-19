import coffeBlasteR from "../../assets/image/coffee_blast-2.png"
import coffeBlasteL from "../../assets/image/coffee_blast.png"
import CommentHeader from "./CommentHeader.tsx";
import Container from "../container/container.tsx";
import CommentSlider from "./CommentSlider.tsx";

function Comment() {
    return (
        <div className="mt-20 flex flex-col justify-center items-center  text-center shadow-2xl p-5
                         w-[80%] mx-auto bg-gray-100 mt-10 mb-50 relative ">
            <img src={coffeBlasteR}
                 className={"absolute  -right-[12.5%] -top-[22%] w-[300px]   "}/>
            <Container>
                <CommentHeader/>
                <CommentSlider/>
            </Container>
            <img src={coffeBlasteL} className={"absolute  -left-[20%]  -bottom-50 w-[300px]"}/>
        </div>
    );
}

export default Comment;