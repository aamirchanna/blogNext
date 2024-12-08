import React from 'react';
import Link from 'next/link';

const SideTable = ({ Image }) => {
  return (
    <div className="flex bg-pink-100 flex-col md:flex-row justify-between  items-center gap-8">
      {/* First Box */}
      <div className="flex flex-col items-center p-5 rounded-lg w-full md:w-1/2">
        <img
          src="https://w7.t-.png"
          alt="Side Table"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Side Table</h2>
        <Link
          href="/"
          className=" font-semibold hover:underline"
        >
          View More
        </Link>
      </div>

      {/* Second Box */}
      <div className="flex flex-col items-center p-5 rounded-lg w-full md:w-1/2">
        <img
          src="https://w7ture.png"
          alt="Side Table"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Side Table</h2>
        <Link
          href="/"
          className="  font-semibold hover:underline"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default SideTable;
