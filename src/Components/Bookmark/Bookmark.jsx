const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-[#fff] p-5 rounded-xl mt-5">
            <h1 className="text-xl font-medium">{title}</h1>
            
        </div>
    );
};

export default Bookmark;