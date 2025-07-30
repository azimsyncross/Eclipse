const Modal = ({ post, onClose }) => {
    if (!post) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{post.title}</h2>
          <div className="mb-4">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="mx-2">•</span>
            <span className="text-sm text-gray-500">{post.author}</span>
          </div>
          <img 
            src={post.imgSrc} 
            alt={post.title} 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">{post.excerpt}</p>
          <button 
            onClick={onClose}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  export default Modal;