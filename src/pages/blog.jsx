import React from 'react';
import MyNavbar from '../components/navbar';
import   { useState, useEffect } from 'react';
import CardDefault from '../card/blogCard';
import Footer from '../components/footer';
import './App.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    useEffect(() => {
        fetch('/api/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data));

        fetch('/api/tags')
            .then(response => response.json())
            .then(data => setTags(data));
    }, []);

    const filterByTag = (tag) => {
        setSelectedTag(tag);
        fetch(`/api/blogs?tag=${tag}`)
            .then(response => response.json())
            .then(data => setBlogs(data));
    };
  // Fetch and display all blogs with tags
  return (
        <>
        <MyNavbar />
        <div className='content mb-6'>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <div className="mb-4">
            {tags.map(tag => (
              <button
                key={tag}
                className={`mr-2 ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => filterByTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
            {blogs.map(blog => (
              <div key={blog.id} className="mb-4">
                <h2 className="text-2xl">{blog.title}</h2>
                <p>{blog.summary}</p>
                <Link to={`/blog/${blog.id}`}>Read More</Link>
              </div>
            ))}
        </div>
        <CardDefault />
        </div>
        <Footer />
        </>
  );
};

export default Blog;