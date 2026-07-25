import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Stat({ number, label }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const isNumber = /^\d+\+?$/.test(number);
  const end = isNumber ? parseInt(number) : 0;

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isNumber || !isInView) return;

    const controls = animate(0, end, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [end, isNumber, isInView]);

  return (
    <div
      ref={ref}
      className="group flex flex-col transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-none tracking-[-0.02em]  transition-all duration-300 group-hover:scale-[1.03] group-hover:text-ink dark:group-hover:text-white">
  {isNumber ? `${count}+` : number}
</h3>

      <p className="mt-3 max-w-[180px] text-[16px] leading-6 text-ink/55 transition-colors duration-300 group-hover:text-ink/80 dark:text-white/50 dark:group-hover:text-white/80">
        {label}
      </p>
    </div>
  );
}