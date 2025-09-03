import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); } /* metade porque duplicamos os itens */
`;

export const Viewport = styled.div`
  overflow: hidden;
  max-width: 575px;
  width: 100%;
  padding: 8px 0;
  position: relative;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  /* fade nas bordas do carrossel */
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 32px,
    #000 calc(100% - 32px),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 32px,
    #000 calc(100% - 32px),
    transparent 100%
  );
`;

export const Track = styled.div<{ $duration: number }>`
  display: flex;
  gap: 24px;
  height: 50px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex-wrap: nowrap;
  will-change: transform;
  animation: ${scroll} ${({ $duration }) => $duration}ms linear infinite;

  & > * {
    flex: 0 0 auto;
    display: inline-flex;
    background-color: #e6e6e6;
    padding: 5px;
    width: 42px;
    height: 42px;
    border-radius: 5px;
    object-fit: contain;
    opacity: 0.95;
  }
`;
