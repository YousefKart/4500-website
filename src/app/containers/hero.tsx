const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';
const imageStyles = 'w-full object-cover opacity-75';

export default function Hero() {
  return (
    <header className={`${commonStyles} bg-primary relative`}>
      <div className="absolute inset-x-0 inset-y-12 top-0">
        <img src="images\Hero Image 1.png" className={`${imageStyles}`} />
        <img src="images\Hero Image 2.png" className={`${imageStyles}`} />
        <img src="images\Hero Image 3.jpg" className={`${imageStyles}`} />
        <img src="images\Hero Image 4.jpg" className={`${imageStyles}`} />
        <img
          src="images\Hero Image 5.jpg"
          className={`${imageStyles} h-full`}
        />
      </div>
      <div className={`flex flex-col items-center relative z-10`}>
        <h1 className={titleStyles} data-aos="fade-up">
          The Last Ride
        </h1>
        {['Aravind Reddy', 'Nisarg Patel', 'Vivek', 'Yousef Kart'].map(
          (name, index) => (
            <h2
              key={index}
              className="text-2xl font-bold mt-4 mb-0"
              data-aos="fade-up"
            >
              {name}
            </h2>
          ),
        )}
        <p className="w-3/5 text-center mt-16" data-aos="fade-up">
          A short animated video exploring themes of nostalgia, connection, and
          hope through the perspective of two cars—one modern, one vintage.
        </p>
      </div>
    </header>
  );
}
