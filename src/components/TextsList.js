import React from 'react';
import TextDisplay from './TextDisplay';

const TextList = ({ texts }) => {
  return (
    texts.map(text => <TextDisplay text={text} votes={text.votes} />)
  );
};

export default TextList;
