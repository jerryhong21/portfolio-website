"use client"
import React from 'react'
import {motion} from 'framer-motion'

export default function SectionDivider() {

  return (
    <motion.div className='bg-gray-200 my-20 h-16 w-1 rounded-full hidden sm:block'
    initial={{y:-100, opacity: 0 }}
    animate={{y:0, opacity: 1}}
    transition={{duration: 0.1, ease: "easeInOut", delay:0.125}}
    >
    </motion.div>
  )
}
 