import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 300px;
  height: 530px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  background-color: #FFF;
  margin: 20px;
`;

export const StyledTitleText = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding-top: 6px;
`
;

export const StyledButtonDiv = styled.div`
  text-align: center;
  button {
    background-color: #FFF;
    border: 1px solid #000;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    border-radius: 5px;
    padding: 6px 16px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    margin-top: 5px;
    &:hover {
      opacity: 0.3;
    }
    span {
      font-weight: bold;
    }
  }
`
;
