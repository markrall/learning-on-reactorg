import React from 'react';

import styled from 'styled-components';

const ListStyles = styled.ul`
  margin: 1rem 0;
`;

const ListItemStyles = styled.li`
  margin-left: 0;
  margin-bottom: 0.5rem;
`;

const List = (props) => {
  const data = props.data;

  let listItems = data.map(item => 
    <ListItemStyles key={item.toString()}>List item: {item}</ListItemStyles>
  );

  return <ListStyles>{listItems}</ListStyles>;
}

export default List;