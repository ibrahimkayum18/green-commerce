const Categories = () => {
  return (
    <div className="px-5 lg:px-10">
      <div className="text-center">
        <h2 className="text-5xl mt-10 pb-4">Green Commerce Categories</h2>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam,
          obcaecati veritatis quaerat dolor excepturi. Autem dignissimos tempore
          temporibus molestiae quidem, rem fugiat debitis dolorem deserunt.
        </p>
      </div>
      <div className="divider"></div>
      <div >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group rounded-md shadow-lg ">
            <img
              src="https://i.ibb.co/0MTNQk1/pexels-andrea-piacquadio-842811.jpg"
              alt="Image 1"
              className="w-full  object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Men's Clothings
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden group rounded-md shadow-lg ">
            <img
              src="https://i.ibb.co/G78hScj/pexels-dids-1190829.jpg"
              alt="Image 3"
              className="w-full   object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Men's Grooming
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <div className="relative overflow-hidden group rounded-md shadow-lg ">
            <img
              src="https://i.ibb.co/0MTNQk1/pexels-andrea-piacquadio-842811.jpg"
              alt="Image 1"
              className="w-full  object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Men's Clothings
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden group rounded-md shadow-lg ">
            <img
              src="https://i.ibb.co/G78hScj/pexels-dids-1190829.jpg"
              alt="Image 3"
              className="w-full   object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Men's Grooming
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden group rounded-md shadow-lg ">
            <img
              src="https://i.ibb.co/G78hScj/pexels-dids-1190829.jpg"
              alt="Image 3"
              className="w-full   object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Men's Grooming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
