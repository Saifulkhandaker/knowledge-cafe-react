import profile from "../../images/profile.png"
const Header = () => {
    return (
           <div className="w-4/5 mx-auto py-3 mt-10 flex justify-between border-b-2">
             <h1 className='text-2xl items-center md:text-4xl  font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt="" />
           </div>
           
        
    );
};

export default Header;