import styled from 'styled-components';

export const ContainerDialog = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
;

export const Frame = styled.div`
  width: 600px;
  height: 600px;

  background-color: #fff;
  margin: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
  max-height: initial;
`;

export const ContentDiv = styled.div`
  padding: 10px;
  max-height: 78vh;
`;
