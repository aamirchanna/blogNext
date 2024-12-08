const ProductCards = () => {
    const products = [
      {
        id: 1,
        name: "Trenton modular sofa_3",
        price: 25000.00,
        image: "https://img.lovepik.com/free-png/20211111/lovepik-sofa-chair-png-image_400846877_wh1200.png"
      },
      {
        id: 2,
        name: "Granite dining table with dining chair",
        price: 25000.00,
        image: "https://img.lovepik.com/free-png/20211111/lovepik-sofa-chair-png-image_400846877_wh1200.png"
      },
      {
        id: 3,
        name: "Outdoor bar table and stool",
        price: 25000.00,
        image: "https://img.lovepik.com/free-png/20211111/lovepik-sofa-chair-png-image_400846877_wh1200.png"
      },
      {
        id: 4,
        name: "Plain console with teak mirror",
        price: 25000.00,
        image: "https://img.lovepik.com/free-png/20211111/lovepik-sofa-chair-png-image_400846877_wh1200.png"
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              <p className="text-lg font-bold">Rs. {product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCards;
  
  