import { pricingPlans } from "../../utils/pricing-plan";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { y: 40, opacity: 0, scale: 0.96 },
  animate: { y: 0, opacity: 1, scale: 1 },
  whileHover: { scale: 1.04, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.18)" },
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      <Container className="text-center">
        <Title>Our Plans & Pricing </Title>
        <Paragraph className="mt-4">
          Pick the ideal plan to help your business grow.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, key) => (
            <motion.div
              key={key}
              className="relative group h-full"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="whileHover"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            >
              <div className="bg-gradient-to-r from-blue-300 to-violet-600 p-1 rounded-3xl h-full">
                <div
                  className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
                                p-8 flex flex-col h-full relative"
                >
                  {plan.bestValue && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                        text-white text-xs font-bold uppercase tracking-wider
                        px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                    >
                      Top Value Offer
                    </motion.div>
                  )}
                  <motion.h3
                    className="text-2xl font-semibold text-heading-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * key, duration: 0.5 }}
                  >
                    {plan.title}
                  </motion.h3>
                  <motion.p
                    className="mt-4 text-4xl font-bold text-heading-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * key, duration: 0.5 }}
                  >
                    {plan.price}
                  </motion.p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, keyFeatures) => (
                      <motion.li
                        key={keyFeatures}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + keyFeatures * 0.07 }}
                      >
                        <span className="text-primary"> ❇️ </span>
                        <span>{feature} </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0 4px 24px 0 rgba(37,99,235,0.18)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button className="w-full text-white">
                        Choose Plan
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
