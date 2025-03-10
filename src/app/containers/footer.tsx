import { BiCopyright } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className="w-full bg-black flex justify-center items-center py-4 border-t-2 border-tertiary shadow-[0px_-10px_20px_rgba(0,0,0,0.5)]">
      <BiCopyright className="mr-2" />
      <p>2025 The Last Ride</p>
    </footer>
  );
}
