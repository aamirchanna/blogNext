const Blogs = () => {
    const articles = [
      {
        id: 1,
        title: "Going all-in with millennial design",
        image: "https://img.lovepik.com/free-png/20211111/lovepik-sofa-chair-png-image_400846877_wh1200.png",
        readTime: "5 min",
        date: "12th Oct 2022"
      },
      {
        id: 2,
        title: "Going all-in with millennial design",
        image: "https://img.lovepik.com/free-png/20211111/lovepik-sofa-chair-png-image_400846877_wh1200.png",
        readTime: "5 min",
        date: "12th Oct 2022"
      },
      {
        id: 3,
        title: "Going all-in with millennial design",
        image: "https://img.lovepik.com/free-png/20211111/lovepik-sofa-chair-png-image_400846877_wh1200.png",
        readTime: "5 min",
        date: "12th Oct 2022"
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col">
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">{article.title}</h2>
              <a href="#" className="text-black hover:underline mb-4">
                Read More
              </a>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {article.date}
                </div>
              </div>
                
            </div>
          ))}
        </div>
          <div className="flex justify-center my-40 mt-8">
          <button className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300">
            View all Post
          </button>
        </div>
      </div>
    );
  };
  
  export default Blogs;