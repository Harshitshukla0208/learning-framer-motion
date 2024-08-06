"use client"
import React from 'react'
import {motion} from 'framer-motion'

const ViewBasedAnimations = () => {
    return (
        <>
            <div className='h-[150vh]' />
            <motion.div className='bg-black h-screen'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
            />
        </>
    )
}

export default ViewBasedAnimations
