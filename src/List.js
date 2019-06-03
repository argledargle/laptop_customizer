import React from "react";
import ListItem from "./ListItem" 

function List(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <p>{props.feature}</p>
      <ListItem features={props.features[0]}/>
      <ListItem features={props.features[1]}/>
      <ListItem features={props.features[2]}/>
      <ListItem features={props.features[3]}/>
    </section>
  );
}

export default List;
