import styled from "styled-components";
import tw from "twin.macro";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import LandingSection from "./LandingSection";
import SpeakerSection from "./SpeakerSection";
import { PageContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <LandingSection />
      <AboutSection />
      <ContactSection />
      <SpeakerSection />
    </PageContainer>
  );
};

export default Home;
