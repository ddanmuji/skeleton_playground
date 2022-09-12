import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import type { SkeletonProps } from './Skeleton';

const pulseKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframes} 1.5s ease-in-out infinite;
`;

const Container = styled.div<SkeletonProps>`
  ${({ color }) => color && `background-color: ${color};`}
  ${({ circle }) => circle && 'border-radius: 50%;'}
  ${({ rounded }) => rounded && 'border-radius: 8px;'}
  ${({ animation }) => animation && pulseAnimation}
  display: ${({ width, height }) => (width || height ? 'block' : 'inline')};
  width: ${({ width }) => width && `${width}`};
  height: ${({ height }) => height && `${height}`};
`;

const Content = styled.span`
  opacity: 0;
`;

export default { Container, Content };
