import React from "react";
import ListItem from "./ListItem"

function List(props) {
console.log(props)
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <p>{props.feature}</p>
      <ListItem features={props.features}/>
    </section>
  );
}

export default List;
