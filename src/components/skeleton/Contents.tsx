import { FC, useEffect, useState } from 'react';
import S from './Contents.styled';
import Skeleton from './Skeleton';

const Item: FC<{ loading: boolean }> = ({ loading }) => (
  <S.ItemWrapper>
    <S.ImageWrapper>
      {loading ? (
        <Skeleton width="100%" height="250px" />
      ) : (
        <S.Image src="https://avatars.githubusercontent.com/u/113294365?v=4" alt="profile_img" />
      )}
    </S.ImageWrapper>
    <S.Info>
      {loading ? (
        <>
          <Skeleton width="150px" height="29px" rounded style={{ marginBottom: '8px' }} />
          <Skeleton width="200px" height="19px" rounded />
        </>
      ) : (
        <>
          <S.Title>ddanmuji</S.Title>
          <S.Desc>I&apos;m studying at the front end.</S.Desc>
        </>
      )}
    </S.Info>
  </S.ItemWrapper>
);

const Contents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <S.Container>
      {Array.from({ length: 25 }).map((_, idx) => (
        <Item key={idx} loading={loading} />
      ))}
    </S.Container>
  );
};

export default Contents;
