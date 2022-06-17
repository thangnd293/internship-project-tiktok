import Link from "components/Link";
import { ISpeaker } from "..";
import {
  AvatarContainer,
  CardContainer,
  Description,
  Title,
  Image,
  Account,
} from "./styles";

interface ISpeakerCardProps {
  speaker: ISpeaker;
}

const SpeakerCard: React.FC<ISpeakerCardProps> = ({ speaker }) => {
  return (
    <CardContainer>
      <AvatarContainer style={{ backgroundImage: `url(${speaker.image})` }} />
      <Title>{speaker.title}</Title>
      <Description>{speaker.description}</Description>
      <Account>{speaker.account}</Account>
      <Link variant="secondary">Learn more</Link>
    </CardContainer>
  );
};

export default SpeakerCard;
