import styled from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.section`
  ${tw`w-full`}
`;

export const AvatarContainer = styled.div`
  ${tw`w-full max-w-[300px] p-[50%] flex items-end justify-center
    bg-no-repeat bg-bottom bg-[#CBFFFD] bg-contain
  `}
`;

export const Image = styled.img`
  ${tw`block`}
`;

export const Title = styled.h5`
  ${tw`mt-5 mb-2.5 font-bold whitespace-nowrap overflow-hidden text-overflow[ellipsis]`}
`;

export const Description = styled.p`
  ${tw`mb-1.5 whitespace-nowrap overflow-hidden text-overflow[ellipsis]`}
`;

export const Account = styled.p`
  ${tw`mb-1`}
`;
