import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutUs = () => {
  return (
    <section id="about-us">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="/assets/Hero_img/aboutus.png"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title>Overview of Our AI Capabilities</Title>
          <Paragraph>
            <br></br>

            We’re dedicated to empowering businesses through transformative AI solutions. 
            Backed by cutting-edge research and innovative algorithms, our expert team delivers a platform designed to adapt seamlessly to your unique challenges. 
            Partner with us and take the lead in your industry's digital revolution.

          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="What Drives Us"
              description="Empowering positive change through responsible and ethical AI for humanity and Earth."
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-land-plot-icon lucide-land-plot"><path d="m12 8 6-3-6-3v10"/><path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"/><path d="m6.49 12.85 11.02 6.3"/><path d="M17.51 12.85 6.5 19.15"/></svg>
            </Info>
            <Info
              title="Shaping the Future"
              description="Leading the way in business transformation through intelligent innovation."
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrows-up-from-line-icon lucide-arrows-up-from-line"><path d="m4 6 3-3 3 3"/><path d="M7 17V3"/><path d="m14 6 3-3 3 3"/><path d="M17 17V3"/><path d="M4 21h16"/></svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
