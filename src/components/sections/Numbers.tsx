import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              56+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Advanced AI Chatbot</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              250+{" "}
            </h2>
            <p className="mt-2 text-heading-3">  Trusted by Leading Enterprises</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              99.9%{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Uptime Assurance</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              3+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Decades of Cutting-Edge Innovation</p>
          </div>
          
        </div>
      </Container>
    </section>
  );
};
