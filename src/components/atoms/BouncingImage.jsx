/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const BouncingImage = ({ image }) => {
  return (
    <motion.img
      src={image}
      alt="Bouncing Image"
      className="rounded-lg"
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
      
    />
  );
};

export default BouncingImage;
