import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { motion } from "framer-motion";

const logos = ["discord", "paypal", "spotify", "youtube", "daraz", "kopiko", "uno", "xbox", "bingx"];

export const BrandsCopy = () => {
  // Duplicate the logos for seamless looping
  const scrollingLogos = [...logos, ...logos];

  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title> Partner with US </Title>
        </div>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            }}
            style={{ width: "fit-content" }}
          >
            {scrollingLogos.map((logo, key) => (
              <div
                key={key}
                className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group flex-shrink-0"
              >
                <img
                  src={`/assets/logos/${logo}.png`}
                  width="100"
                  height="60"
                  alt={logo}
                  className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};