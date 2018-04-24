import React from 'react';

export default props => {
  let temp;
  temp = props.object.main ? Math.floor(parseInt(props.object.main.temp)) : null;
  let tempElement = temp ? (
    <div>{temp}</div>
  ) : (
    <div>&nbsp;</div>
  )
  return(
    <div>
      {tempElement}

    </div>
  )
}
