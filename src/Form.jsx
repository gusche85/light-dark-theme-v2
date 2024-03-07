import React, { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';
import lightImage from './light.png';
import darkImage from './dark.png';

export default function Form () {

  const [title, setTitle] = useState('Welcome');

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  
  return (
        <Panel title={title} updateTitle={updateTitle}>
        <ThemeImage />
        <br/>
          <Button onClick={() => updateTitle('Signup')}>Sign up</Button>
          <Button onClick={() => updateTitle('Login')}>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    
    <button className={className} onClick={onClick}>
      {children}
    </button>
    
  );
}

function ThemeImage() {
  const theme = useContext(ThemeContext);
  const updatedImage = theme === 'light' ? lightImage : darkImage;
  return (
   <>
       <img src={updatedImage}/>
   </>
  );
}
