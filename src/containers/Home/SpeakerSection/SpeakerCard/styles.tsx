import styled from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.section`
  ${tw`w-full tablet:max-w-[300px] text-xs laptop:text-md`}
  flex: 0 0 calc(100vw - 40px)
`;

export const AvatarContainer = styled.div`
  ${tw`w-full p-[50%] flex items-end justify-center
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
