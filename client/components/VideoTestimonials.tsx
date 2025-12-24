export default function VideoTestimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-setapp-dark via-setapp-dark to-white px-5 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-setapp-purple rounded-[20px] overflow-hidden relative">
          {/* Carousel Controls */}
          <div className="absolute top-8 right-8 flex items-center gap-12 z-10">
            <button className="text-white opacity-50 hover:opacity-100 transition-opacity">
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L12 12L2 22"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="text-white opacity-50 hover:opacity-100 transition-opacity">
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22L2 12L12 2"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <p className="text-white text-2xl md:text-3xl font-medium leading-relaxed">
                  Musicians like Jason use Setapp to push the limits of their
                  creativity, dancing through tasks for more time to play.
                </p>
              </div>
              <p className="text-white text-base font-normal">Jason Staczek</p>
            </div>

            {/* Right Side - Video/Image */}
            <div className="relative">
              <div className="aspect-[9/12] bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg relative overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/544c0168f56a62d0ae0fb4294ca0255f22279926?width=1340"
                  alt="Jason Staczek"
                  className="w-full h-full object-cover"
                />
                {/* Play Button */}
                <button className="absolute bottom-8 left-8 w-16 h-16 md:w-[74px] md:h-[74px] bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0498 6.27245C13.2634 7.08357 13.2634 8.8672 12.0498 9.67832L3.18744 15.6018C1.82607 16.5117 0 15.5361 0 13.8989V2.05187C0 0.414624 1.82607 -0.560984 3.18744 0.348933L12.0498 6.27245Z"
                      fill="#9D9CA2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-6 pb-8">
            <button className="w-3 h-3 rounded-full bg-[#1D1D22]"></button>
            <button className="w-3 h-3 rounded-full bg-[#D5D4D4]"></button>
            <button className="w-3 h-3 rounded-full bg-[#D5D4D4]"></button>
            <button className="w-3 h-3 rounded-full bg-[#D5D4D4]"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
