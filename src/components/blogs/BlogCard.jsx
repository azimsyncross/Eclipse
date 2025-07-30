// BlogCard Component
const BlogCard = ({ date, author, title, excerpt, imgSrc, onReadMore }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-full">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title}
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 bg-white h-full">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button
          onClick={() => onReadMore(title)}
          className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300"
        >
          Read More
          <svg 
            className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;