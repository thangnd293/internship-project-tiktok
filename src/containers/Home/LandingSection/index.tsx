import { useMediaQuery } from "react-responsive";
import {
  ActionContainer,
  ButtonDownload,
  ButtonDownloadLarge,
  ButtonTitle,
  CalendarContainer,
  CalendarTitle,
  CircleImageContainer,
  Heading,
  HightlightText,
  LandingContainer,
  LandingContent,
} from "./styles";
import Button from "components/Button";
import Paragraph from "designs/Paragraph";
import { ArrowDown } from "../icons";
import calendarImage from "assets/images/calendar.png";
import circleImage from "assets/images/circle.png";

const LandingSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <LandingContainer
      id="download"
      style={{ background: isMobile ? "none" : "" }}
    >
      <LandingContent>
        <CalendarContainer>
          <img src={calendarImage} alt="calendar" />
          <CalendarTitle>19 April 2022, Tuesday</CalendarTitle>
        </CalendarContainer>
        <Heading>
          Joy Deliver at <br /> #Foryou{" "}
          <HightlightText>Summit: SEA</HightlightText>
        </Heading>
        <Paragraph className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet euismod
          in adipiscing eleifend sed in tincidunt.
        </Paragraph>
        <ActionContainer>
          <Button
            className={isMobile ? "w-3/4" : ""}
            variant="primary"
            size="medium"
            onClick={() => {}}
          >
            Get the app
          </Button>
          {!isMobile && (
            <ButtonDownload className="group">
              <ArrowDown className="text-tertiary duration-200 group-hover:text-white" />
            </ButtonDownload>
          )}

          {isMobile && (
            <ButtonDownloadLarge className="group">
              <ArrowDown className="text-tertiary duration-200 group-hover:text-white" />
              <ButtonTitle className="text-tertiary font-bold duration-200 group-hover:text-white">
                Download
              </ButtonTitle>
            </ButtonDownloadLarge>
          )}
        </ActionContainer>
        <CircleImageContainer>
          <img src={circleImage} alt="circle" />
        </CircleImageContainer>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
