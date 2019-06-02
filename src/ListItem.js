import React from 'react';
import ListSelector from './ListSelector';

function ListItem(props) {
    console.log(props.features[0].key)
    return (
      <section className="list__item">
        <p>{props.features[0].key}</p>
        <ListSelector features={props}/>
      </section>
    );
  }
  
  export default ListItem;