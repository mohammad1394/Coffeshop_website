import backgroundImage from "../../assets/image/news-banner.png"
import Button from "../button/Button.tsx";
import cupCoffe from "../../assets/image/cup.png"
import coffeBeanImage from "../../assets/image/coffee_bean.png"

function CoffeBanner() {
    return (
        <div
           style={{background: `url(${backgroundImage})`}}
           className={"w-full h-[50vh] mt-20 text-white relative "}>

            <img src={coffeBeanImage} className={"absolute right-0 h-[60vh]  bottom-0 hidden lg:flex"}/>
            <img src={cupCoffe} className={"absolute right-30 top-10 h-[40vh] hidden lg:flex"} />

            <div className="flex flex-col  gap-3 w-[80%] py-8  text-center mx-auto lg:ml-25 lg:w-[40%] lg:py-30  lg:text-right">
                <h6 className={"font-bold text-[30px]"}>
                    صبح را شگفت انگیز شروع کنید
                </h6>
                <p>
                    با هر جرعه، طعم زندگی را بچشید؛ قهوه‌ای با عطر بی‌نظیر و انرژی‌بخش. از اولین لحظه تا آخرین قطره، روزتان را با ما خاص کنید. قهوه‌ی ما، همراه همیشگی لحظات خوش شما.
                </p>
                <div>
                <Button>
                    ثبت سفارش
                </Button>

                </div>
            </div>


        </div>
    );
}

export default CoffeBanner;