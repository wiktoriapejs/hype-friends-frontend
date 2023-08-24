
import WelcomeText from '/src/assets/welcome-green.png'
import { Link } from 'react-router-dom';


function IndexPage(){
    return (
        <div className='flex flex-col items-center'>
    <img src={WelcomeText} className='w-full max-w-[38rem] h-auto' alt='Welcome Text' />
    <div className=' text-[#0C6164] font-light font-serif text-center  text-base lg:text-lg max-w-screen-lg mx-4 lg:mx-0'>
        <p>Hype friends is the place where you can rent or lend HIGH FASHION clothes. If you don't want to buy another one occasion item, you don't have a place in your wardrobe or you just want to share your branded thing and earn money at the same time this is the perfect place for you!</p>
    </div>
    <div className='font-serif  flex  md:flex text-center justify-center text-[#0C6164] gap-8 font-mediumbold text-xl lg:text-3xl px-6 my-10 pt-1'>
        <button className='w-full md:w-auto px-8 py-3 shadow-2xl shadow-black border-2 rounded-full border-[#0C6164] my-2 md:my-0'><Link to={'/rent'}>Rent</Link></button>
        <button className='w-full md:w-auto px-8 py-3 shadow-2xl shadow-black border-2 rounded-full border-[#0C6164] my-2 md:my-0'><Link to={'/list_item'}>Lend</Link></button>
    </div>
</div>

    )
    
}

export default IndexPage;