import React from 'react';
import { useParams } from 'react-router-dom';

const Welcome = () => {
  
  let { username } = useParams()
  
  return (
    <div>
    Successfully signup
    <h1>
      Welcome {username}
    </h1>
    </div>
  )
}

export default Welcome;