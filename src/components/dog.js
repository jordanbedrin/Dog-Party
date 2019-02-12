import React from 'react';

const Dog = (props) => {

  const dogsArray = props.dogs.map((dogURL) => {
    return <img style={{width: '25%', height: 300}} alt="dog pic" src={dogURL} />
  })

  return (
    <div>
      {dogsArray}
    </div>
  )

}

export default Dog;
