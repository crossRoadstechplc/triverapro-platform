import { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
            <div className="w-[40px] h-[40px] bg-secondary animate-rotate1 rounded-none shadow-lg" />
            <div className="w-[40px] h-[40px] bg-accent animate-rotate2 rounded-none shadow-lg" />
        </motion.div>
    );
};

export default LoadingScreen;
