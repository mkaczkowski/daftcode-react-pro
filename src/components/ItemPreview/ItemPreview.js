import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { media } from '@theme';

const ItemPreview = styled.div`
  position: relative;
  padding: 1rem;
  border: transparent dashed 1px;
  :hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    border: #c1c1c1 dashed 1px;
    background-color: rgba(241, 241, 241, 0.5);
  }

  ${ifProp(
    'timeline',
    css`
      :not(:hover) {
        :before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 5px;
          left: 5px;
          background: #dcdcdc;
          margin-left: -5px;
        }

        :after {
          content: ' ';
          position: absolute;
          left: -3px;
          top: -2px;
          height: 5px;
          width: 5px;
          border: 3px solid #d2d2d2;
          border-radius: 50%;
          pointer-events: none;
        }
      }
    `
  )};
`;
ItemPreview.Avatar = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  ${media.tablet`
    height: 100px;
    width: 100px;
    margin-bottom:1.2rem;
  `};
`;

ItemPreview.Header = styled.h4`
  margin: 0 0 1rem;
`;

ItemPreview.Description = styled.div`
  flex: 1;
  padding: 0 1rem;
  margin-left: 1.5rem;
  
  ${media.tablet`
      text-align: center;
      margin-top: 1.2rem;
      margin-left: 0;
  `};
`;

ItemPreview.Badge = styled.div`
  position: absolute;
  top:0;
  right:0;
`;

ItemPreview.Content = styled.div``;

export default ItemPreview;
