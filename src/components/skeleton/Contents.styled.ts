import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dedede;
  border-radius: 4px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Desc = styled.span`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

export default {
  Container,
  ItemWrapper,
  ImageWrapper,
  Image,
  Info,
  Title,
  Desc,
};
