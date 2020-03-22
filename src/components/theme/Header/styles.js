import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #CC4646;
  z-index: 50;
  border-radius: 0;
  top: 0px;
  border-bottom: 1px solid #F57676;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
