import React from 'react';

function ListItem(props) {
    return (
      <section className="list__item">
        <div>{props.features}</div>
      </section>
    );
  }
  
  export default ListItem;