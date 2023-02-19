import { Card } from "./Card"
export default function Rooms(){
    return(
        <div className="flex flex-col container flex-wrap w-full justify-center md:items-center mx-auto">
            <div className="flex flex-col mx-auto pt-1 items-center">
                <span className="font-normal text-4xl text-cyan-700">Room & Suits</span>
                <h2 className="font-normal text-6xl mt-3 mb-5">Our Rooms</h2>
            </div>
            <div className="flex flex-wrap">
                <Card imagen={'https://hotelina-nextjs.vercel.app/assets/images/bg/room1.png'}/>
                <Card imagen={'https://hotelina-nextjs.vercel.app/assets/images/bg/room2.png'}/>
                <Card imagen={'https://hotelina-nextjs.vercel.app/assets/images/bg/room3.png'}/>
                <Card imagen={'https://hotelina-nextjs.vercel.app/assets/images/bg/room3.png'}/>
                <Card imagen={'https://hotelina-nextjs.vercel.app/assets/images/bg/room5.png'}/>
                <Card imagen={'https://hotelina-nextjs.vercel.app/assets/images/bg/room6.png'}/>
            </div>
            <div className="flex mx-auto my-16 box-border text-white bg-cyan-700 hover:bg-black p-2 w-40 justify-center">
                <a href="">Room & Suites</a>
            </div>
        </div>
    )
}