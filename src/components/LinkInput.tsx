import React, { LegacyRef, memo, useCallback, useRef } from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
  max-width: 600px;
  width: 95vw;
  margin: 20px auto;
  display: flex;
  align-items: stretch;
  justify-content: center;

  input {
    text-align: center;
    outline: 0;
    border: 5px solid #f7f7f7;
    position: relative;
    z-index: 2;
    border-radius: 5px;
    font-size: 1em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
    width: 60%;
    padding: 0.3rem;

    &#title {
      width: 30%;
    }
  }
  button {
    width: 10%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
    background-color: #21b9f1;
    color: #f7f7f7;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    margin-left: 0.2rem;
  }
`;

type InputProps = {
  onTransformLink: Function, 
  inputRef: LegacyRef<HTMLInputElement>
}

const LinkInput = memo(({ onTransformLink, inputRef }: InputProps) => {
  const titleRef = useRef<HTMLInputElement>(null);

  const postInputLink = (url: string) => {
    const title: any = titleRef.current;
    onTransformLink(title?.value, url);
    title.value = '';
  }

  const onClickButton = useCallback((e) => {
    postInputLink(e.target.previousSibling.value);
  }, []);

  const onPressInput = useCallback((e) => {
    if (e.code !== 'Enter') return;
    postInputLink(e.target.value);
  }, []);

  return (
    <InputBox>
      <input type="text" id="title" placeholder="TITLE" ref={titleRef} />
      <input
        type="text"
        onKeyPress={onPressInput}
        ref={inputRef}
        placeholder="URL"
      />
      <button type="button" onClick={onClickButton}>
        OK
      </button>
    </InputBox>
  )}
);

export default LinkInput;
