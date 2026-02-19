
import bgCoffe from "../../assets/image/news-banner.png"
import coffeCupL from "../../assets/image/wing1.png"
import coffeCupR from "../../assets/image/wing2.png"

function NewsLetter() {
    return (
        <div style={{backgroundImage: `url(${bgCoffe})`}} className={"w-full h-[70vh] lg:h-[50vh] mt-20 text-white relative "}>

            <div className={"flex flex-col justify-center items-center gap-5 text-center w-[80%] mx-auto py-10"}>
                <h6 className={"text-[30px] font-bold"}>
                    ما را دنبال کنید تا به آخرین اخبار دسترسی داشته باشید
                </h6>
                <p className={"text-[16px]"}>
                    آخرین اخبار، بروزرسانی ها و پیشنهاد های ویژه را از دست ندهید.
                </p>
                <div className={'flex flex-col lg:flex-row-reverse gap-5'}>

                <input placeholder={"ایمیل خود را وارد کنید "} className={"bg-white w-[250px] lg:w-[500px] p-5 text-gray-800 text-right rounded-sm"}/>
                <button className={"bg-amber-200 p-3 text-black rounded-sm"}>
                    ثبت ایمیل
                </button>
                </div>
                <img src={coffeCupR} className={"absolute right-0 -bottom-10 hidden lg:block z-10"}/>
                <img src={coffeCupL} className={"absolute left-0 -bottom-10 hidden lg:block z-10"}/>
            </div>
        </div>
    );
}

export default NewsLetter;