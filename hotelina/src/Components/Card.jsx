export function Card({imagen}){
    return (
        <div className="relative">
            <img className="h-96 max-w-full mt-6 px-4" src={imagen} alt="" />
            <div className="absolute left-10 -bottom-16 py-10 px-6 text-white">
                <div className="font-normal text-2xl">
                    <span>$350</span>/ Per Night
                </div>
                <h3 className="font-normal text-4xl pt-1 mb-3 hover:text-cyan-700">
                    <a href="/">Double Room</a>
                </h3>
                <div className="flex items-center gap-10 ">
                    <div className="flex">
                        <img src="https://hotelina-nextjs.vercel.app/assets/images/icons/double-bed.svg" alt="" />
                        <p>3 Double Bed</p>
                    </div>
                    <div className="flex">
                        <img src="https://hotelina-nextjs.vercel.app/assets/images/icons/persons.svg" alt="" />
                        <p>8 Guest</p>
                    </div>
                </div>
                <div className="pt-8">
                    <a href="">Book Now</a>
                </div>
            </div>
        </div>
    )
}