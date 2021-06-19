import React, {useState} from 'react';
import {motion} from 'framer-motion';

const Toggle = ({children, title}) => {  // children if the content inside the Toggle tag in faq section
     const [toggle, setToggle] = useState(false);
     return(
          // the layout props let the AnimateSharedLayout in faqsection knows that he has to animate the div
          <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
               <motion.h4 layout>{title}</motion.h4>
               {toggle ? children : ""}
               <div className="faq-line"></div>
          </motion.div>
     )
};

export default Toggle;