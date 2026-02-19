import Button from "../button/Button.tsx";

interface Menu {
    title: string;
    price: string
    recipe : string
    url : string
}


function MenuItems({title, price, recipe , url}: Menu) {
    return (
        <div className={"flex flex-col text-center gap-5 p-2 shadow-xl font-[Tanha] relative"}>
            <div>
                <img
                    src={url}
                />
            </div>
            <div>

                <h6 className={"text-amber-950 text-[20px] font-bold"}>{title} </h6>
                <p className={"text-[15px] mb-2"}>
                    {recipe}
                </p>
                <p>
                    {price}
                </p>
            </div>
            <div className={"relative top-7"}>
                <Button className={"bg-amber-950! text-white"}>سفارش</Button>
            </div>
        </div>
    );
}

export default MenuItems;