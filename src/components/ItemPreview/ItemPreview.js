import styled from 'styled-components';

const ItemPreview = styled.div`
  position: relative;
  padding: 1rem;
  border: transparent dashed 1px;
  :hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    border: #c1c1c1 dashed 1px;
    background-color: rgba(241,241,241,0.5);
  }
`;

export default ItemPreview;
