export default function Header() {
  return (
  <header className="bg-white shadow min-w-full max-h-full fixed top-0 z-10">
    <nav className="container mx-auto px-4 flex flex-col justify-center ">
      <div className="flex justify-between items-center py-4">
        <div className="h-14 py-2">
          <a href="/" className="text-xl font-bold text-gray-900 ">
            <img src="https://demo.egenslab.com/next-js/hotelina/assets/images/header-logo2.svg"/>
          </a>
        </div>
        <div className="h-14 py-4">
          <ul className="flex space-x-4 ">
            <li><a href="/" className="text-zinc-800 hover:text-cyan-700 hover:underline font-medium mx-6 py-10" >DEMO</a></li>
            <li><a href="/" className="text-zinc-800 hover:text-cyan-700 hover:underline font-medium mx-6 py-10">ROOM & SUITS</a></li>
            <li><a href="/" className="text-zinc-800 hover:text-cyan-700 hover:underline font-medium mx-6 py-10">BLOG</a></li>
            <li><a href="/" className="text-zinc-800 hover:text-cyan-700 hover:underline font-medium mx-6 py-10">FEATURES</a></li>
            <li><a href="/" className="text-zinc-800 hover:text-cyan-700 hover:underline font-medium mx-6 py-10">SUPORT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  );
};


