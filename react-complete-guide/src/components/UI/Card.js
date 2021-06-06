import React from 'react'
import './Card.css';

function Card(props) {
  // Így lehet a gyerek classait felhasználni
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card
