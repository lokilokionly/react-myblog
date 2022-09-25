
import {Link} from 'react-router-dom'
function HeaderC() {
    return (
        <main className='w-[935px] h-[53px] mx-auto flex justify-between px-2'>
            <Link to={'/'}><h1 className='text-[38px] relative bottom-1'>MyBlog</h1></Link>
            <input className='border-2 my-auto mx-auto' type="text" />
            <nav className="flex justify-between my-auto mx-auto">
                <Link to={'notepage'}><i className="fa-solid fa-book text-[26px] mx-8"></i></Link>
                <Link to={'identification'}><i className="fa-solid fa-user text-[26px] mx-8"></i></Link>
            </nav>
        </main>
    )
}
export default HeaderC;