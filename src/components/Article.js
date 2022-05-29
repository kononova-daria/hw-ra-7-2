import React from 'react';

export default function Article(props) {
  return (
    <div className="item item-article">
      <h3><a href="https://kononova-daria.github.io/hw-ra-7-2/">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
};