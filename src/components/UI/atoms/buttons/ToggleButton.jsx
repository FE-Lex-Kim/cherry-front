import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const ToggleButton = () => {
  return (
    <>
      <CheckBox type='checkbox' id='chk' />
      <StyledLabel htmlFor='chk'>
        <span>선택</span>
      </StyledLabel>
    </>
  );
};

const CheckBox = styled.input`
  position: absolute;
  left: -1000%;

  &:checked + label {
    background-color: ${palette.pointRed};
  }

  &:checked + label:after {
    left: calc(100% - 22px);
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: block;

  width: 48px;
  height: 24px;

  border-radius: 100px;

  background-color: #c4c4c4;

  transition: background-color 0.4s;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 50%;

    width: 20px;
    height: 20px;

    background: ${palette.textWhite};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transform: translateY(-50%);
    transition: all 0.4s;

    border-radius: 100%;
  }

  span {
    display: none;
  }
`;

export default ToggleButton;
