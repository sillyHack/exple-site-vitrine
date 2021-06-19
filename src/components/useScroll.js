import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

export const useScroll = () => {
     const controls = useAnimation();
     const [element, view] = useInView({threshold: 0.3});  // start displaying when we reach 30% of the next element
     if(view){
          controls.start("show");
     }else{
          controls.start("hidden");
     }
     return [element, controls];
};