import Paragraph from "designs/Paragraph";
import ParagraphLayout from "layouts/ParagraphLayout";
import SpeakerCard from "./SpeakerCard";
import { ContentContainer, SpeakerContainer, TitleContainer } from "./styles";

import person1 from "assets/images/person-1.png";
import person2 from "assets/images/person-2.png";
import person3 from "assets/images/person-3.png";
import person4 from "assets/images/person-4.png";
import person5 from "assets/images/person-5.png";
import person6 from "assets/images/person-6.png";

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
      <ContentContainer>
        {SPEAKER_LIST.map((speaker) => {
          return <SpeakerCard speaker={speaker} />;
        })}
      </ContentContainer>
    </SpeakerContainer>
  );
};

export default SpeakerSection;
