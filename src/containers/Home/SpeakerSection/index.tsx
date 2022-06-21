import { useEffect, useRef, useState } from "react";

import Paragraph from "designs/Paragraph";
import ParagraphLayout from "layouts/ParagraphLayout";
import SpeakerCard from "./SpeakerCard";
import {
  Button,
  ContentContainer,
  SliderBox,
  SpeakerContainer,
  TitleContainer,
} from "./styles";

import person1 from "assets/images/person-1.png";
import person2 from "assets/images/person-2.png";
import person3 from "assets/images/person-3.png";
import person4 from "assets/images/person-4.png";
import person5 from "assets/images/person-5.png";
import person6 from "assets/images/person-6.png";
import { useMediaQuery } from "react-responsive";
import { ChevronLeft, ChevronRight } from "./icons";

export interface ISpeaker {
  id: number;
  title: string;
  description: string;
  account: string;
  image: string;
}

const SPEAKER_LIST: ISpeaker[] = [
  {
    id: 1,
    title: "Seungyeon Kim",
    description: "K-Pop singer-songwriter",
    account: "@somi_official_",
    image: person1,
  },
  {
    id: 2,
    title: "Seungyeon Kim",
    description: "K-Pop singer-songwriter",
    account: "@somi_official_",
    image: person2,
  },
  {
    id: 3,
    title: "Seungyeon Kim",
    description: "K-Pop singer-songwriter",
    account: "@somi_official_",
    image: person3,
  },
  {
    id: 4,
    title: "Seungyeon Kim",
    description: "K-Pop singer-songwriter",
    account: "@somi_official_",
    image: person4,
  },
  {
    id: 5,
    title: "Seungyeon Kim",
    description: "K-Pop singer-songwriter",
    account: "@somi_official_",
    image: person5,
  },
  {
    id: 6,
    title: "Seungyeon Kim",
    description: "K-Pop singer-songwriter",
    account: "@somi_official_",
    image: person6,
  },
];

const SpeakerSection: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const contentContainer = useRef(null);

  const [currentPosition, setCurrentPosition] = useState(0);
  const [showButtonLeft, setShowButtonLeft] = useState(true);
  const [showButtonRight, setShowButtonRight] = useState(true);

  interface IValue {
    countChildren: number;
    itemWidth: number;
  }

  const calcItemWidthAndCountChildren = (): IValue | undefined => {
    if (!contentContainer.current) return;
    // @ts-ignore: Object is possibly 'null'.
    const countChildren = contentContainer.current.children.length;
    // @ts-ignore: Object is possibly 'null'.
    const itemWidth = contentContainer.current.clientWidth;

    return { countChildren, itemWidth };
  };
  const handleLeftClick = () => {
    const values = calcItemWidthAndCountChildren();
    setCurrentPosition((prev) => (prev -= values!.itemWidth));
  };

  const handleRightClick = () => {
    const values = calcItemWidthAndCountChildren();
    setCurrentPosition((prev) => (prev += values!.itemWidth));
  };

  useEffect(() => {
    const values = calcItemWidthAndCountChildren();

    const containerLength = values!.countChildren * values!.itemWidth;

    setShowButtonLeft(!(currentPosition === 0));
    setShowButtonRight(
      !(currentPosition >= containerLength - values!.itemWidth)
    );
  }, [currentPosition]);

  return (
    <SpeakerContainer>
      <TitleContainer>
        <ParagraphLayout mainTitle="Speaker" subTitle="& Experts">
          <Paragraph>
            Deliver joy and impact on TikTok with insights from our panel of
            experts.
          </Paragraph>
        </ParagraphLayout>
      </TitleContainer>
      <SliderBox>
        <ContentContainer
          ref={contentContainer}
          style={{
            transform: `translateX(-${currentPosition}px)`,
          }}
        >
          {SPEAKER_LIST.map((speaker, index) => {
            return <SpeakerCard key={index} speaker={speaker} />;
          })}
        </ContentContainer>
        {isMobile && (
          <>
            {showButtonLeft && (
              <Button className="translate-y-1/2" onClick={handleLeftClick}>
                <ChevronLeft />
              </Button>
            )}
            {showButtonRight && (
              <Button
                className="translate-y-1/2 right-0"
                onClick={handleRightClick}
              >
                <ChevronRight />
              </Button>
            )}
          </>
        )}
      </SliderBox>
    </SpeakerContainer>
  );
};

export default SpeakerSection;
