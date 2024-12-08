const Footer = () => {
    return (
      <footer className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Column */}
          <div>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>
  
          {/* Links Column */}
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>
  
          {/* Help Column */}
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black">Payment Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policies</a></li>
            </ul>
          </div>
  
          {/* Newsletter Column */}
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-gray-300 pb-1 focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="border border-black px-4 py-1 hover:bg-black hover:text-white transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="border-t mt-12 pt-6">
          <p className="text-gray-600">2022 Meubel House. All rights reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;