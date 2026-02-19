

interface Customer{
    name: string,
    img: string,
    review : string
}





function CommentItem({name , img ,review } : Customer) {
    return (
            <div className={"flex flex-col gap-5 border border-amber-500 p-10 bg-white w-full bg-black z-10"}>
            <p className={"text-gray-600 text-[16px]  "}>
                {review}
            </p>
            <img src={img}  className={"w-[100px] h-[100px] object-cover rounded-full mx-auto my-5 border-amber-500 border-2"}/>
            <p className={"text-amber-950 "}>{name}  </p>
        </div>
    );
}

export default CommentItem;