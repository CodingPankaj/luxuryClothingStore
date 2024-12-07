import { useState } from "react";

export const Accordion = ({ header, children, headerStyle, buttonStyle }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className="px-5 py-4">
      <AccordionHeader
        isAccordionOpen={isAccordionOpen}
        setIsAccordionOpen={setIsAccordionOpen}
        header={header}
        headerStyle={headerStyle}
        buttonStyle={buttonStyle}
      />
      <AccordionWrapper isAccordionOpen={isAccordionOpen} children={children} />
    </div>
  );
};

const AccordionHeader = ({
  isAccordionOpen,
  setIsAccordionOpen,
  header,
  headerStyle = "",
  buttonStyle = "",
}) => {
  return (
    <button
      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      className={`flex w-full items-center gap-3 text-base font-medium uppercase tracking-wide text-primary-text-color ${buttonStyle}`}
    >
      <h3 className={headerStyle}>{header}</h3>
      <span
        className={`relative h-[1px] w-3 bg-primary-bg-color before:absolute before:left-0 before:top-0 before:h-[1px] before:w-3 before:bg-primary-bg-color before:transition-all before:duration-200 ${isAccordionOpen ? "before:rotate-0" : "before:rotate-90"}`}
      ></span>
    </button>
  );
};

const AccordionWrapper = ({ isAccordionOpen, children }) => {
  return (
    <div
      className={`grid ${isAccordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500`}
    >
      <div className="row-span-2 overflow-hidden">{children}</div>
    </div>
  );
};
