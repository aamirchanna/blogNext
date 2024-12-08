const HeroSection = () => {
    return (
      <div className="min-h-[600px] w-full relative bg-[#F7D881] overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div className="flex flex-col justify-center space-y-6 py-12">
              <h1 className="text-4xl md:text-6xl font-medium leading-tight">
                Rocket single 
              </h1>
              <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              seater
              </h1>
              <a 
                href="#" 
                className="inline-block w-fit border-b-2 border-black pb-1 text-lg hover:opacity-70 transition-opacity"
              >
                Shop Now
              </a>
            </div>
            <div className="flex justify-end items-center">
              <img
                src="https://a.1stdibscdn.com/elegant-italian-sofa-in-floral-upholstery-for-sale/f_9331/f_281017621649405483933/f_28101762_1649405484856_bg_processed.jpg?width=768"
                alt="Rocket single seater chair"
                className="w-full max-w-[600px] opacity-70 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;