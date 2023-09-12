import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog =>{
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = ( id, time ) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    
    // remove the red blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  }
  
  return (
    <>
      <Header></Header>

      <div className="w-4/5 mx-auto md:flex justify-between  mt-5 mb-5 gap-2">
        <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime ={readingTime} ></Bookmarks>
      </div>
    </>
  );
}

export default App;
