import { Outlet } from 'react-router-dom'
import HeaderC from '../../page/Header/HeaderC.js'
import FooterC from '../../page/Footer/FooterC.js'
function Layout() {
    return(
        <main>
            <header className=' w-full h-[53px] border-b-2 '>
                <HeaderC />                
            </header>
            <main className='w-[937px]  mx-auto border-x-2 bg-[#cfd0d6]'>
                <Outlet/>
            </main>
            <footer className='w-[937px]  mx-auto border-x-2 border-t-2 '>
                <FooterC/>
            </footer>
        </main>
    )
}
export {Layout} ;

// <Link to={'/'}>1</Link>
//                 <Link to={'/testroute'}>2</Link>
//                 <Link to={'*'}>3</Link>