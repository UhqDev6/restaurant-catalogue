import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${(props) => props.grid};
`;

Grid.defaultProps = {
  gap: '1rem',
};

export default Grid;