import { useEffect } from 'react'
import { gsap, Power3 } from "gsap";
const year = new Date().getFullYear()

const Footer = () => {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeOut } });
        tl.fromTo(".line-foot", { x: -60, opacity: 0 }, { x: 0, opacity: 1, delay: 4.3 })
        tl.fromTo(".text-foot", { x: -10, opacity: 0 }, { x: 0, opacity: 1 })
    }, [])
    return (
        <footer className="overflow-hidden fixed flex items-center gap-2 font-my-font text-xs left-[-155px] lg:left-[-85px] bottom-40 text-my-white-dark dark:text-my-black-light -rotate-90">
            <span className="line-foot inline-block relative h-[2px] w-14 rounded-full bg-my-white-dark dark:bg-my-black-light"><span className="absolute right-[-1px] top-[-5px] inline-block h-3 w-3 rounded-full bg-my-white-dark dark:bg-my-black-light"></span></span>
            <p className='text-foot'>Hak Cipta &copy; {year} - BTP - Dirancang oleh Banny Tri Pamungkas</p>
        </footer>
    )
}

export default Footer