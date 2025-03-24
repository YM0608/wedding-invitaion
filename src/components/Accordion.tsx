import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore fill="#e88ca6" />
        </span>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
    font-family: 'Noto Serif KR', serif;
    border: 1px solid #e6ece1;
    margin-bottom: 20px;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e6ece1;
    padding: 0 15px;
    cursor: pointer;
    font-family: 'Noto Serif KR', serif;

    & > p {
        color: #44484d;
    }
`;
const AccordionContent = styled.div`
    font-size: 14px;
    text-align: justify;
    padding: 10px 20px;
    background-color: #ffffff;
    font-family: 'Noto Serif KR', serif;
`;
