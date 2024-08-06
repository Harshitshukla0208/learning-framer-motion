"use client"
import React, { useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'

const ViewBasedAnimations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true }); //this once:true property allows the animations to fire only single time, its not gona be firing repeatedly

    useEffect(() => {
        console.log("Is in view -> ", isInView)
    },[isInView])

    return (
        <>
            {/* method 1 */}
            <div className='h-[150vh]' />
            <motion.div className='bg-black h-screen'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
            />

            {/* method 2 */}
            <div 
                ref={ref}
                style={{height: "100vh",
                    background: isInView ? "blue" : "red",
                    transition: "1s background",
                }}
            />
        </>
    )
}

export default ViewBasedAnimations
