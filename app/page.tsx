'use client'
import React, { useState, useRef, useEffect, useReducer } from 'react'
import { motion } from 'framer-motion'

let tabs = [
  { id: 'world', label: 'World' },
  { id: 'ny', label: 'N.Y.' },
  { id: 'business', label: 'Business' },
  { id: 'arts', label: 'Arts' },
  { id: 'science', label: 'Science' },
]

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [focus, setFocus] = useState(false)

  console.log(focus)

  return (
    <div>
      <div className='space-x-1'>
        {' '}
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              onMouseOver={() => {
                setActiveTab(tab.id)
                setFocus(false)
              }}
              onFocus={() => {
                setActiveTab(tab.id)
                setFocus(true)
              }}
              className={`
              focus:outline-none
            p-3 py-1.5 text-sm font-medium text-white  outline-sky-400 focus-visible:outline relative`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId='active-pill'
                  className={`${
                    focus && 'outline-red-500 outline outline-offset-1 '
                  } bg-blue-100/20 absolute inset-0 rounded-lg`}
                  style={{ borderRadius: 8 }}
                ></motion.div>
              )}
              <span className='relative z-10 mix-blend-exclusion'>
                {tab.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950'>
      <AnimatedTabs />
      <div className='flex flex-col items-center justify-center space-y-2'>
        <motion.div
          className='bg-red-500 w-5 h-5 rounded-full'
          layoutId='red-dot'
        ></motion.div>
      </div>
    </main>
  )
}
