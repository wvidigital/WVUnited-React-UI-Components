import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemBox from "./ItemBox";

export default function Grid(props) {

  // Create a Grid component that will render a <p> element with styles.
  const Grid = styled.div`
  display: flex;
  flex-direction: ${props.direction};
  flex-wrap: wrap;
  
  justify-content: space-evenly;
  
  margin: 0 0 8px;
  background: ${props.background};
  color: ${props.color};
  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

  return  (
    <Grid>
      {props.items.map((item, index) => {
        return <ItemBox key={index} data={item} />;
      })}
    </Grid>
  );
}

Grid.defaultProps = {
  direction: 'row',
  background: 'transparent',
  color: '#333',
};

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  direction: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
}


