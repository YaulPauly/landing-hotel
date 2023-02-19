export default function Banner() {
  return (
    <div className="relative">
      <video className="w-full h-screen object-cover" autoPlay loop muted>
        <source
          src="https://demo.egenslab.com/download/hotel-room-2021-11-03-20-39-09-utc.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute bottom-32 left-36">
        <h4 className="font-normal text-xl leading-9 tracking-wider capitalize text-white mb-8 ">To Visit Our</h4>
        <h1 className="font-normal text-white text-shadow text-8xl leading-none tracking-tighter mb-0">Hotelina Resort</h1>
      </div>
    </div>
  );
}
