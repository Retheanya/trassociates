export const VideoSection = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-blueprint-4906-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h2 className="text-5xl font-light tracking-wide mb-4">
            Building Excellence
          </h2>
          <p className="text-xl font-light tracking-wide max-w-2xl mx-auto mb-8">
            Transforming visions into architectural masterpieces
          </p>
          <blockquote className="text-2xl md:text-3xl font-light tracking-wide text-white italic mb-6">
            "We Believe In Serving You The Safe And Aesthetic Infrastructure Development"
          </blockquote>


        </div>
      </div>
    </section>
  );
};
