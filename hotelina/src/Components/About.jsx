export default function About() {
  return (
    <div className="flex flex-wrap container justify-center md:items-center pt-32 pb-24 w-full mx-auto px-6">
        <div className="box-border px-7 max-w-2xl">
            <div className=" box-border pt-2 my-7">
              <span className="font-normal text-4xl text-cyan-700 leading-3">The Hotelina Luxury Hotel.</span>
              <h2 className="font-normal text-6xl leading-none my-5">Find The Best Hotel For Accomodation.</h2>
            </div>
            <div className="box-border ">
                <p className="mb-5 text-gray-500 text-xl tracking-wide">
                Welcome to the best five- luxury hotel in New York. Hotel is veryes
                elementum sesue the aucan vestibulum aliquam justo in sapien on thi
                rutrum volutpat. Donec in quis the pellentesque velit. Donec id
                velitel ac arcu posuere blane.
                </p>
                <p className="mb-5 text-gray-500 text-xl tracking-wide">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni
                sceisuen the aucan ligula. Orci varius natoque penatibus ethemen
                magnis discustent parturient monte nascete ridiculus musclineorto
                nellentesque habitant forminy morbine.
                </p>
            </div>
            <div className="flex my-5">
                <div className=" box-border mr-5">
                    <img
                    src="https://hotelina-nextjs.vercel.app/assets/images/bg/manager.png"
                    alt=""
                    />
                </div>
                <div className="box-border">
                    <h5 className="text-cyan-700 font-normal text-xl mb-2">Hotel Manager</h5>
                    <img
                    src="https://hotelina-nextjs.vercel.app/assets/images/bg/manager-name.png"
                    alt=""
                    />
                </div>
            </div>
      </div>
      <div>
        <img
          src="https://hotelina-nextjs.vercel.app/assets/images/bg/home-about-img.png"
          alt=""
        />
      </div>
    </div>
  );
}
