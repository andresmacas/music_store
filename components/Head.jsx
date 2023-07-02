import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0 opacity-100");
    const [lastScrolly, setLastScrolly] = useState(0);

    return (
        <header className={`w-full h-[50px] bg-black text-white md:h-[80px] flex items-center
        justify-between z-20 sticky top-0 transition-all duration-500 ${show}`}>
            <Wrapper className={'transition-all duration-500'}>
                <Link href='/'>
                    <img src="/images/icon.jpg" alt="cover_eduardo" className={"rounded-md w-[40px] md:w-[60px]"} />
                </Link>
                <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
            </Wrapper>
        </header>
    )
}

export default Header