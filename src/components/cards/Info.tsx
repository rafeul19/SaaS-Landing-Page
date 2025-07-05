import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden"
    >
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
        {children}
      </div>
      <h2 className="text-heading-2 w-max relative font-semibold md:text-xl">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
