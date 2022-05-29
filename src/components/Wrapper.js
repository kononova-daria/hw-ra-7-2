import React from 'react';

export default function Wrapper(props) {
  return (
    <div className={`wrap-item wrap-item-${props.status}`}>
      <span className="label">{props.label}</span>
      {props.children}
    </div>
  )
};