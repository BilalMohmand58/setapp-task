export default function AppsShowcase() {
  return (
    <section className="w-full bg-setapp-dark px-5 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 pb-8 border-b border-setapp-divider">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wide">
              What you get on Setapp.
            </h2>
          </div>
          <div>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              With a single monthly subscription at $9.99, you get 240+ apps for
              your Mac.
            </p>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="space-y-5">
          {/* Featured App - CleanMyMac */}
          <div className="bg-setapp-pink rounded-[20px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7b02d23e638542b3b8720db01c4e2bcd1f435c19?width=160"
                alt="CleanMyMac icon"
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <div>
                <h3 className="text-setapp-dark text-2xl md:text-3xl font-semibold mb-2">
                  Keep your Mac clean
                </h3>
                <p className="text-setapp-dark text-lg md:text-xl">
                  Remove junk, scan for malware, wipe email attachments
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/42c138eae75407faeda4f9ad0ec4035347fb1e0e?width=2212"
                alt="CleanMyMac screenshot"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Two Column Apps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* CodeRunner */}
            <div className="bg-[#F4F0E4] rounded-[20px] p-8 md:p-12 flex flex-col justify-between">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5329a1567bea43ad9bf5591f291868d5b33200fa?width=1160"
                alt="CodeRunner screenshot"
                className="w-full rounded-lg mb-8"
              />
              <div className="flex flex-col gap-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8aac8bb73096f7387b2eaa7993bf166d564f25d2?width=160"
                  alt="CodeRunner icon"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <div>
                  <h3 className="text-setapp-dark text-2xl md:text-3xl font-semibold mb-2">
                    Write code
                  </h3>
                  <p className="text-setapp-dark text-lg md:text-xl">
                    Create applications in more than 25 languages
                  </p>
                </div>
              </div>
            </div>

            {/* Meeter */}
            <div className="bg-[#384C75] rounded-[20px] p-8 md:p-12 flex flex-col justify-between">
              <div className="flex flex-col gap-6 mb-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cb4124dbdae7f6bc1cc63fd7701d3da0b03a5f23?width=136"
                  alt="Meeter icon"
                  className="w-14 h-14 md:w-17 md:h-17"
                />
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                    Join meetings in a click
                  </h3>
                  <p className="text-white text-lg md:text-xl">
                    Quickly access links to your meetings from menu bar
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/dad2091eb7cd1a05ee94a332808d2933788daeec?width=1160"
                alt="Meeter screenshot"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* View All Link */}
          <div className="flex justify-center pt-12">
            <button className="flex items-center gap-3 text-white text-xl font-medium tracking-widest hover:opacity-80 transition-opacity">
              <svg
                width="27"
                height="21"
                viewBox="0 0 27 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_277)">
                  <path
                    d="M15 2L24.688 10.5L15 19M2 10.606H24.316"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_277">
                    <rect width="27" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              View all superpowers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
