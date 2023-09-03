const FooterBanner = () => {
  return (
    <div
      className="hero min-h-screen mt-10"
      style={{
        backgroundImage:
          "url(https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5be946dbbd505.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Fighters</h1>
          <p className="mb-5">
            Discover the countless benefits of martial arts training, improved
            physical fitness, increased self-confidence, enhanced discipline,
            stress relief, and the ability to defend yourself.
          </p>
          <button className="btn ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
