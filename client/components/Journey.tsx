export default function Journey() {
  return (
    <section className="w-full bg-setapp-dark px-5 py-20 md:py-24">
      <div className="max-w-7xl mx-auto border-b border-setapp-divider pb-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wide">
              Your Setapp journey.
            </h2>
          </div>
          <div>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Type in your task into Setapp search and get instant app
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
