import React from 'react';
import PropTypes from 'prop-types';
import { ContainerDialog, Frame, ContentDiv } from './styles';
import { StyledButtonDiv } from '../Card/styles';

export default function Dialog ({ isOpen, closeDialog, children }) {
  if (isOpen) {
    return (
      <ContainerDialog isOpen={isOpen}>
        <Frame
          visible={isOpen}
        >
          <ContentDiv>
            <div style={{ margin: '0 0 20px 0' }}>
              <StyledButtonDiv>
                <button onClick={closeDialog}><span>Fechar</span></button>
              </StyledButtonDiv>
            </div>
            <div>
              {children.length > 0 ? (
                children.map((child) => {
                  return child;
                })
              ) : (
                children
              )}
            </div>
          </ContentDiv>
        </Frame>
      </ContainerDialog>
    );
  } else {
    return null;
  }
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.arrayOf(PropTypes.any)])
}
;
