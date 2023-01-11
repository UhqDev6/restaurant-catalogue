import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
  margin-left: 2rem;
  margin-top: 2rem;
  &:hover {
    background: rgb(237,237,254);
    background: linear-gradient(90deg, rgba(237,237,254,1) 0%, rgba(218,234,250,1) 100%);
    cursor: pointer;
    transform: skew(2deg, 2deg);
    transition-duration: 0.5s;
  }
`;

export default Card;