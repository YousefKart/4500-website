import { HomeIcon } from '@heroicons/react/20/solid';
import { FaYoutube, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex w-full border-b-2 border-tertiary fixed top-0 z-50 shadow-[0px_10px_20px_rgba(0,0,0,0.5)]">
      <ul className="flex justify-start space-between bg-secondary w-1/2 gap-6 pl-8">
        <li>
          <a href="#">
            <HomeIcon className="h-8 w-8 mt-2" />
          </a>
        </li>
        <li className="p-3 text-xl font-bold">
          <a href="#storyboard">Storyboard</a>
        </li>
        <li className="p-3 text-xl font-bold">
          <a href="#milestones">Milestones</a>
        </li>
        <li className="p-3 text-xl font-bold">
          <a href="#models">Models</a>
        </li>
      </ul>
      <ul className="flex justify-end space-between bg-secondary w-1/2 gap-8 pr-8">
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="#">
            <FaYoutube className="h-8 w-8 mt-2" />
          </a>
        </li>
        <li>
          <a href="https://github.com/YousefKart/4500-website" target="#">
            <FaGithub className="h-8 w-8 mt-2" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
