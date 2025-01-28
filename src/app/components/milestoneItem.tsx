const MilestoneItem = ({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) => {
  return (
    <li className="flex flex-col items-center" data-aos="fade-up">
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-64 h-64"
          style={{ borderRadius: '5%' }}
        />
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="text-md text-gray-400 mb-8">{date}</p>
      </div>
    </li>
  );
};

export default MilestoneItem;
