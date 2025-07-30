import BlogCard from "./BlogCard";
import posts from "./data";
import { useState } from "react";
import Modal from "./Modal";
const RecentBlog = () => {
  
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleReadMore = (title) => {
        const post = posts.find((p) => p.title === title);
        setSelectedPost(post);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
      };
    
  return (
    <section id="recent-posts" className="recent-posts py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container " data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          Recent Blog Posts
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              date={post.date}
              author={post.author}
              title={post.title}
              excerpt={post.excerpt}
              imgSrc={post.imgSrc}
              link={post.link}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <Modal post={selectedPost} onClose={closeModal} />}
    </section>
  );
};

export default RecentBlog;
