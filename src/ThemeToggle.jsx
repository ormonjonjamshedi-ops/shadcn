import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-300 flex items-center justify-center text-lg shadow transition"
    >
      {dark ? '☀' : '🌙'}
    </button>
  )
}

export default ThemeToggle