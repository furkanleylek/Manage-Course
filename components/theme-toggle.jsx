"use client"
import React from 'react'
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {

    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <button>
            {currentTheme === "dark" ? (
                <FaSun
                    size={20}
                    className="cursor-pointer text-yellow-400 hover:scale-[1.02]"
                    onClick={() => {
                        setTheme("light")
                    }}
                />
            ) : (
                <FaMoon
                    size={20}
                    className="cursor-pointer text-slate-700 hover:scale-[1.02]"
                    onClick={() => {
                        setTheme("dark")
                    }}
                />
            )}
        </button>
    )
}

export default ThemeToggle