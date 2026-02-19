import FeatureList from "./FeatureList.tsx";
import WhyUsHeader from "./WhyUsHeader.tsx";
import WhyUsFooter from "./WhyUsFooter.tsx";
import Container from "../container/container.tsx";
import coffe from "../../assets/image/coffee_blast-2.png";



function WhyusSection() {
    return (
        <div className={'mt-40 relative'}>


                <img src={coffe}
                     className="absolute right-[0px] top-[-200px] w-[350px] pointer-events-none select-none" />

            <Container>
            <WhyUsHeader/>
            <FeatureList/>
            <WhyUsFooter/>

            </Container>


        </div>
    );
}

export default WhyusSection;