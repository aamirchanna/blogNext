import React from 'react';

export const InstagramFollow = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://img.lovepik.com/background/20211021/large/lovepik-pink-background-image_400110349.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: '#fff',
      }}
      className="flex items-center justify-center"
    >
      <div className="flex items-center flex-col p-4 py-40 text-center">
        <h1 className="text-7xl font-bold mb-4">Our Instagram</h1>
        <p className="font-bold text-2xl mb-6">
          Follow Our Page on Instagram
        </p>
        <a
          href="https://www.instagram.com/ark"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border px-6 py-3 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Follow Us
        </a>
      </div>
    </div>
  );
};
