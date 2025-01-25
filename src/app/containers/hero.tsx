const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Hero() {
  return (
    <header className={`${commonStyles} bg-primary`}>
      <h1 className={titleStyles} data-aos="fade-up">
        Project Name
      </h1>
      {['Yousef Kart', 'Vivek', 'Nisarg Patel', 'Aravind Reddy'].map(
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
      <p className="w-2/5 text-center mt-16" data-aos="fade-up">
        Description
      </p>
    </header>
  );
}
