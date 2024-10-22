import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 mb-5'>
            <h1 className='text-4xl'>Knowledge cafe</h1>
            <img src={profile} alt=''/>
        </header>
    );
};

export default Header;