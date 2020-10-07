import React from 'react';

import NewApp from './NewApp';

import NewComponent from './NewComponent';

import Image from './Image';

import Link from './Link';

import AnotherImage from './AnotherImage';

import Mytable from './Mytable';
import Paragraph from './Paragraph';
import About from './About';
import Codeme from './Codeme';
import Last from './Last';


function App(){
  return(
    <div className="vid" autoplay loop muted>
      <NewApp/>
      <NewComponent/>
      <Image/>
      <Link/>
      <AnotherImage/>
      <Mytable/>
      <Paragraph/>
      <About/>
      <Codeme/>
      <Last/>
    </div>
  );



}

export default App;

