"use client"
import React from 'react'
import {motion, MotionConfig} from 'framer-motion'

const Gestures = () => {
    return (
        <div className='grid place-content-center h-screen gap-[0.8rem]'>
            <MotionConfig //using MotionConfig we can apply same kind off animation to multiple elements this will help to make codebase short
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95, rotate: "2.5deg"}}
                transition={{
                    duration: "0.125",
                    ease: "easeInOut",
                }}
            >
                <motion.button 
                    // whileHover={{scale: 1.05}}
                    // whileTap={{scale: 0.95, rotate: "2.5deg"}}
                    // transition={{
                    //     duration: "0.125",
                    //     ease: "easeInOut",
                    // }}
                    className='example-button'>Click me!</motion.button>
                <motion.button 
                    // whileHover={{scale: 1.05}}
                    // whileTap={{scale: 0.95, rotate: "2.5deg"}}
                    // transition={{
                    //     duration: "0.125",
                    //     ease: "easeInOut",
                    // }}
                    className='bg-blue-800 text-white text-base p-1 rounded-[0.4rem]'>Click me!</motion.button>
            </MotionConfig>
        </div>
    )
}

export default Gestures
