import { CSSProperties, FC, useMemo } from 'react';
import S from './Skeleton.styled';

export interface SkeletonProps {
  animation?: boolean;
  circle?: boolean;
  color?: string;
  count?: number;
  height?: string;
  rounded?: boolean;
  style?: CSSProperties;
  width?: string;
}

const Skeleton: FC<SkeletonProps> = ({ count, ...props }) => {
  const content = useMemo(() => [...Array({ length: count })].map(() => '-').join(''), [count]);

  return (
    <S.Container {...props}>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

Skeleton.defaultProps = {
  color: '#ddd',
};

export default Skeleton;
