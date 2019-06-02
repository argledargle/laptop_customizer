import React from 'react';

function ListSelector(props) {
    console.log(props.features.features[0].key)
    return (
      <section className="item__selector">
        <p>Option 1</p>
        <p>Option 2</p>
      </section>
    );
  }
  
  export default ListSelector;