import React, { memo } from 'react';
import styled from 'styled-components';

const Lists = styled.ul`
  max-width: 600px;
  width: 95vw;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-top: 2px solid rgba(0, 0, 0, 0.2);

  li {
    display: flex;
    align-items: center;
    line-height: 2rem;
    font-size: 1.2em;
    border-bottom: 0.5px dotted rgba(0, 0, 0, 0.2);

    &.title {
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      background: #20b9f1;
      color: #f0f2f5;
    }
    &:last-of-type {
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    }
    span {
      padding: 0.5rem 1rem;
      flex: 1;
      width: 56%;
      border-left: 1px solid rgba(0, 0, 0, 0.2);

      &:first-of-type {
        width: 30%;
        flex: unset;
        border: 0;
        text-align: center;
      }
    }

    @media (max-width: 340px) {
      font-size: 0.9em;
    }
  }
`;

const LinkList = memo(() => {
  return (
    <Lists>
      <li className="title">
        <span>title</span>
        <span>shorten link</span>
      </li>
    </Lists>
  );
});

export default LinkList;
