import React from 'react';

import NewApp from './NewApp';

import NewComponent from './NewComponent';

import Image from './Image';

import Link from './Link';

import AnotherImage from './AnotherImage';

import Mytable from './Mytable';
import Paragraph from './Paragraph';

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
    </div>
  );



}

export default App;

