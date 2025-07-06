import { Container } from "../shared/Container";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ to, decimals = 0, suffix = "", inView }: { to: number; decimals?: number; suffix?: string; inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const duration = 1200; // ms
    const startTime = performance.now();
    const startValue = 0;

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = startValue + (to - startValue) * progress;
      setValue(current);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setValue(to);
      }
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  useEffect(() => {
    if (!inView) setValue(0);
  }, [inView]);

  return (
    <motion.h2
      className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </motion.h2>
  );
}

export const Numbers = () => {
  const ref = useRef<HTMLDivElement>(null);
  // margin: "0px 0px -50% 0px" triggers when the element is halfway into the viewport
  const inView = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });

  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          ref={ref}
          className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex justify-center align-center"
        >
          <div
            className="p-5 sm:p-6 sm:py-8 w-full max-w-5xl rounded-3xl bg-box-bg
              border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
              grid grid-cols-2 md:grid-cols-4"
          >
            <div className="text-center px-5">
              <AnimatedNumber to={56} suffix="+" inView={inView} />
              <p className="mt-2 text-heading-3"> Advanced AI Chatbot</p>
            </div>
            <div className="text-center px-5">
              <AnimatedNumber to={250} suffix="+" inView={inView} />
              <p className="mt-2 text-heading-3">  Trusted by Leading Enterprises</p>
            </div>
            <div className="text-center px-5">
              <AnimatedNumber to={99.9} decimals={1} suffix="%" inView={inView} />
              <p className="mt-2 text-heading-3"> Uptime Assurance</p>
            </div>
            <div className="text-center px-5">
              <AnimatedNumber to={3} suffix="+" inView={inView} />
              <p className="mt-2 text-heading-3"> Decades of Cutting-Edge Innovation</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
