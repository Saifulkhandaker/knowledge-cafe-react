import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')  
        .then(res => res.json())
        .then(data => setBlogs(data))   
    },[])
    return (
        <div className="mb-20">
            <h1 className="text-4xl ">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => 
                <Blog 
                blog={blog}
                handleBookmarks={handleBookmarks}
                handleMarkAsRead={handleMarkAsRead}

                >

                </Blog>)
            }

            
        </div>
    );
};

export default Blogs;