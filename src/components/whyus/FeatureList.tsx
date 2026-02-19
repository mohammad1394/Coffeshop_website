
import {featuresData} from "../../data/featureData.ts";
import FeatureItem from "./FeatureItem.tsx";

function FeatureList() {
    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto my-10'}>
            {
                featuresData.map((feature , index) => (
                    <FeatureItem key={index} {...feature}/>
                ))
            }
        </div>
    );
}

export default FeatureList;