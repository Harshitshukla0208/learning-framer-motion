"use client"
import React from 'react'
import {motion, useAnimationControls} from 'framer-motion'

const Animationcontrols = () => {
    // how to fire animations using some functions
    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start("flip");
    }
    
    return (
        <div className='grid place-content-center h-screen gap-2'>
            <motion.button onClick={handleClick} className='example-button'>Flip it!</motion.button>
            <motion.div className='w-36 h-36 bg-black rounded-md'
                variants={{
                    initial: {
                        rotate: 0
                    },
                    flip:{
                        rotate: 360
                    }
                }}
                initial = "initial"
                animate={controls}
            ></motion.div>
        </div>
    )
}

export default Animationcontrols
