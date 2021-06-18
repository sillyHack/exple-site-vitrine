export const pageAnimation = {
     hidden: {
          opacity: 0,
          y: 300
     },
     show: {
          opacity: 1,
          y: 0,
          transition: {
               duration: 1
          }
     },
     exit: { // used to define the component behaviour(fade out) when we leave it
          opacity: 0,
          y: 300,
          transition: {
               duration: 1
          }
     }
};