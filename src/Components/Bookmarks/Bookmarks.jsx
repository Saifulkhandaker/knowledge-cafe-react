import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    const {} = bookmarks;
    return (
        <div >
            <div className="mb-8 bg-[#6047ec1a] ">
                <h1 className="text-xl font-medium px-5 py-2 text-purple-700 border-2 border-purple-500">
                     Spent time on read: {readingTime} min
                </h1>
            </div>
            <div className="bg-[#1111110d]  px-2 rounded-xl">
            <h2 className="text-2xl text-center font-medium">Bookmarked Blog:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    bookmark={bookmark}

                    ></Bookmark>)
            }
            </div>
            
        </div>
    );
};

export default Bookmarks;