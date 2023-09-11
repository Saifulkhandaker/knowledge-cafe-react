const Blog = ({ blog }) => {
  const { title, cover, author, author_img, posted_date, reading_time,hashtags } = blog;

  return (
    <div>
      <img src={cover} alt="" />

      <div className="flex items-center justify-between">
        <div>
        <div className="flex items-center gap-4 mt-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <p className="text-xl font-semibold">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        </div>
        <div>
          <p>{reading_time} min read</p>
        </div>
      </div>
      <h2 className="text-2xl font-medium mt-5">{title}</h2>
      <p className="mb-16 font-medium">

      {/* <span><a href="">#{hashtags[0]}</a></span>
      <span><a href="">#{hashtags[1]}</a></span> */}
        {
            hashtags.map(hash => <span><a href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};

export default Blog;
