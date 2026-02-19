import Button from "../button/Button.tsx";

function WhyUsFooter() {
    return (
        <div className={"w-1/2 mx-auto text-center font-[Tanha] mt-5"}>
            <p className={"text-gray-500 text-[16px] "}>
                بهترین ایده ها با بهترین قهوه ها شروع میشوند
            </p>
            <p className={"text-amber-950 text-[15px] lg:text-[25px] font-bold mt-2"}>
                از امروز شروع کن
            </p>
            <div className={"mt-10"}>
                <Button>
                    به ما بپیوندید
                </Button>
            </div>
        </div>
    );
}

export default WhyUsFooter;