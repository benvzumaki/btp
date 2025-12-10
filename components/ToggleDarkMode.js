import { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useTheme } from 'next-themes';

const ToggleDarkMode = () => {
    const [mount, setMount] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();

    const iconMode = () => {
        if (theme === "dark") {
            return (<MdLightMode size={32} />)
        } else {
            return (<MdDarkMode size={32} />)
        }
    }

    useEffect(() => {
        if (systemTheme === undefined) {
            setTheme("light")
            setMount(true)
        } else {
            setMount(true)
        }
    }, [])
    if (mount) {
        return (
            <div>
                <button
                    className='flex justify-center items-center h-9 w-9 bg-transparent text-my-black dark:text-white hover:border-my-primary dark:hover:border-my-primary hover:text-my-primary dark:hover:text-my-primary transition-all duration-300 ease-out'
                    onClick={() => {
                        if (theme === "dark") {
                            setTheme("light")
                        } else {
                            setTheme("dark")
                        }
                    }}>{iconMode()}</button>
            </div>
        )
    }
}

export default ToggleDarkMode