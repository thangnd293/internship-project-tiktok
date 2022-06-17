import Link from "components/Link";
import Paragraph from "designs/Paragraph";
import ParagraphLayout from "layouts/ParagraphLayout";
import {
  AboutContainer,
  AboutContent,
  LeftContainer,
  RightContainer,
  SubTitle,
  VideoContent,
  VideoTitle,
} from "./styles";

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="aboutus">
      <LeftContainer>
        <VideoContent>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YykjpeuMNEk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <VideoTitle>
            TikTok: Coldplay - Hymn For The Weekend (Official Video)
          </VideoTitle>
        </VideoContent>
      </LeftContainer>
      <RightContainer>
        <AboutContent>
          <ParagraphLayout mainTitle="About" subTitle="Program">
            <SubTitle>
              Speaker: Seungyeon Kim, General Manager, Global Business
              Solutions, SEA, TikTok
            </SubTitle>
            <Paragraph className=" mb-10">
              Jump right into the new age of entertainment with stories and
              insights on the trends that have taken the region by storm. Kpop
              star JEON SOMI joins the fun as we reveal exciting new products
              for 2022, spanning brand safety, Shoppertainment, measurement and
              creators.
            </Paragraph>
            <Link>Learn more</Link>
          </ParagraphLayout>
        </AboutContent>
      </RightContainer>
    </AboutContainer>
  );
};

export default AboutSection;
