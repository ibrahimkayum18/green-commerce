const BannerHome = () => {
  return (
    <div className="banner bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 md:py-20 lg:py-24"> 
      <div className="max-w-screen-lg mx-auto lg:flex lg:justify-between items-center">
        
        <div className="text-center lg:text-left">
          <div className="text-4xl font-bold mb-4">Fashion Paradise</div>
          <div className="text-lg mb-8">
            Discover the latest trends in fashion. Shop now for the best deals!
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <img
            src="https://i.ibb.co/Yt0tB5w/images-3.jpg"
            alt="Fashion Image"
            className="rounded-xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>
        {/* Mobile Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="block mx-auto mt-8 p-4 border border-white rounded-md lg:hidden bg-opacity-75"
        />
      </div>
    </div>
  );
};

export default BannerHome;
