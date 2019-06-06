import React from 'react';
import TextDisplay from './TextDisplay';

const TextList = ({ texts }) => {
  return (
    texts.map(text => <TextDisplay text={text} />)
  );
};

export default TextList;
