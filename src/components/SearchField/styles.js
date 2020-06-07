import styled from 'styled-components'

export const SearchInput = styled.input`
  height: 44px;
  padding: 0 8px;
  border-radius: 3px;
  font: inherit;
  transition: box-shadow 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 500px;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 3px 4px 5px;
  }
`
