"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BasicsOfMotion = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="grid place-content-center h-screen gap-2">
            <AnimatePresence mode="popLayout">
                {isVisible && (<motion.div
                    initial={{ rotate: 0, scale: 0, y: 0 }}
                    animate={{ rotate: 180, scale: 1, y: [0, 150, -150, -150, 0] }}
                    exit={{ rotate: 0, scale: 0, y: 0 }} // whenever we want to use exit prop we need to wrap the motion div into AnimatePresence
                    transition={{ duration: 1, ease: "backInOut", times:[0, 0.25, 0.50, 0.85, 1] }}
                    className="w-36 h-36 bg-black rounded-md "
                />)}
            </AnimatePresence>
            <motion.button layout onClick={() => setIsVisible(!isVisible)} className='example-button'>Show / Hide</motion.button>
        </div>
    );
};

export default BasicsOfMotion;
