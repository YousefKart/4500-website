import { MdDoNotDisturbOn } from 'react-icons/md';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

const MilestoneItem = ({
  title,
  date,
  image,
  status,
}: {
  title: string;
  date: string;
  image: string;
  status: String;
}) => {
  return (
    <li className="flex flex-col items-center" data-aos="fade-up">
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-64 h-64 object-cover shadow-[10px_10px_20px_rgba(0,0,0,0.5)]"
          style={{ borderRadius: '5%' }}
        />
        <div className="flex justify-between">
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          {status === 'done' && (
            <FaCheckCircle className="text-green-500 mt-3 mr-2" />
          )}
          {status === 'pending' && (
            <FaClock className="text-yellow-500 mt-3 mr-2" />
          )}
          {status === 'planned' && (
            <MdDoNotDisturbOn className="text-red-500 mt-3 mr-2" />
          )}
        </div>
        <p className="text-md text-gray-400 mb-8">{date}</p>
      </div>
    </li>
  );
};

export default MilestoneItem;
