import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';


const TypeWriting = () => {
  return (
    <TypeWriterEffect
    textStyle={{
     
      color: '#FFFFFF',
      paddingTop: 6,
    }}
    startDelay={1000}
    cursorColor="#3F3D56"
    multiText={[
      'A Frontend Dev.',
      'A Web3 enthusiast.',
      'A Social Media Manager.',
      'An aspiring UI/UX Designer.',
      'Software Engineer.',
      'A Guitarist.',
    ]}
    multiTextDelay={1000}
    typeSpeed={30}
  />
  )
}

export default TypeWriting