import styled from 'styled-components';

const WrapperParagraph = styled.div`
  ${'' /* -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box; */}
    display:block;
    padding:0px;
    width: 100%;
    height: 150px;
    overflow:scroll;
`;

export default WrapperParagraph;