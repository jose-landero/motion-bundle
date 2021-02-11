import {
  m,
  MotionConfig,
  AnimationFeature,
  ExitFeature,
  AnimatePresence,
  Variants,
  useCycle
} from "framer-motion";
import * as React from "react";
import "./styles.css";

const variants: Variants = {
  initial: {
    opacity: 0
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 2
    }
  }
};

export default function App() {
  const [isOpen, setIsOpen] = useCycle(false, true);
  return (
    <div className="App">
      <button onClick={() => setIsOpen()}>Toggle</button>
      <MotionConfig features={[AnimationFeature, ExitFeature]}>
        <AnimatePresence exitBeforeEnter>
          {isOpen ? (
            <m.div
              key="blue"
              className="box blue"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ) : (
            <m.div
              key="green"
              className="box green"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
