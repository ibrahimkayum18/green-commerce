

const Banner = () => {
    return (
        <header className="bg-cover bg-center relative h-64 md:h-80 lg:h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-80">
        <img className="w-full h-full" src="https://i.ibb.co/xh0VMnM/pngtree-geometric-fashion-technology-anniversary-cool-banner-background-image-341165.jpg" alt="" />
      </div>
      
      {/* Content */}
      <div className="text-white text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Website Name</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">A brief description of your website</p>

        {/* Search Bar (visible on small and medium devices) */}
        <div className="md:hidden lg:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white w-full p-2 rounded-md"
          />
        </div>
      </div>
    </header>
    );
};

export default Banner;