import { easeInOut } from "framer-motion";

export const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 0,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        }
    }  
}

 export const SlideRight = (delay) => {
    return {
        hidden: {
            x: 100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        },
        exit: { // for fade out
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        }
    };
}