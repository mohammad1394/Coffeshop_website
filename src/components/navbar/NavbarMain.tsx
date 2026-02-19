import Button from "../button/Button.tsx";


function NavbarMain() {
    return (
        <div className={"absolute   top-80 text-center lg:text-right right:60 lg:left-10 ml-5"}>

            <h2 className={"text-[30px] lg:text-[40px]  text-amber-200 mb-10"}>
                کافه گوشه
            </h2>

            <p className={"text-[16px] lg:text-[20px] mb-10"}>
                فراتر از یک کافه ، جایی برای استراحت ، آرامش و تجربه های جدید
                  <br/>
                !به کافه ما خوش آمدید
            </p>

            <Button>
                ثبت سفارش
            </Button>
        </div>
    );
}

export default NavbarMain;