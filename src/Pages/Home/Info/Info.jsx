const Info = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side: Header and Description */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">Our Categories</h1>
          <p className="text-lg">Your hero description goes here.</p>
        </div>

        {/* Right side: Grid layout for images */}
        <div className="md:w-1/2 grid grid-cols-2  lg:grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="relative overflow-hidden group rounded-md shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3teaGR6g8PcH1ZUdZ38gu5LgvHh3a9d1E6g&usqp=CAU"
              alt="Image 1"
              className="w-full h-32 md:h-40 lg:h-48 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Men's Clothings
              </p>
            </div>
          </div>

          {/* Image 2 */}
          {/* Repeat the above structure for each image (Image 2 to Image 5) */}

          {/* Image 3 */}
          <div className="relative overflow-hidden group rounded-md shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAUyu_R5gt651nXH0jY9DdHH8aMU_mo77pw&usqp=CAU"
              alt="Image 3"
              className="w-full h-32 md:h-40 lg:h-48 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Men's Grooming
              </p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative overflow-hidden group rounded-md shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOCr2EqKvfl1Tbm--Dl0BRuxCvERDINg5CQ&usqp=CAU"
              alt="Image 4"
              className="w-full h-32 md:h-40 lg:h-48 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Innerware & louneware
              </p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative overflow-hidden group rounded-md shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHi3g66B53rd167BcH2za5HKeN29OlcGXyQ&usqp=CAU"
              alt="Image 5"
              className="w-full h-32 md:h-40 lg:h-48 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold text-center">
                Accessories 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/* 
<img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3teaGR6g8PcH1ZUdZ38gu5LgvHh3a9d1E6g&usqp=CAU"
            alt="Image 1"
            className="w-full h-32 object-cover"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAUyu_R5gt651nXH0jY9DdHH8aMU_mo77pw&usqp=CAU"
            alt="Image 2"
            className="w-full h-32 object-cover"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOCr2EqKvfl1Tbm--Dl0BRuxCvERDINg5CQ&usqp=CAU"
            alt="Image 3"
            className="w-full h-32 object-cover"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHi3g66B53rd167BcH2za5HKeN29OlcGXyQ&usqp=CAU"
            alt="Image 4"
            className="w-full h-32 object-cover"
          />
*/
export default Info;
