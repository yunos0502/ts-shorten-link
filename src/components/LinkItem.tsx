import React, { MouseEventHandler } from 'react';
import { CopyLinkButton, DeleteLinkButton } from './Buttons';

interface ItemProps {
  link: {
    id: string,
    title: string,
    link: string
  }, 
  copyLinkHandler: any, 
  onDeleteLink: MouseEventHandler<HTMLButtonElement>
}

const LinkItem = ({ link, copyLinkHandler, onDeleteLink }: ItemProps) => {
  const onUrlCopyHandler = (e: any): void => {
    e.preventDefault();
    copyLinkHandler(e.target.previousSibling.innerText);
  };

  return (
    <li key={link.id} data-_id={link.id}>
      <span>{link.title}</span>
      <span>{link.link}</span>
      <CopyLinkButton onClick={onUrlCopyHandler} />
      <DeleteLinkButton onClick={onDeleteLink} />
    </li>
  );
};

export default LinkItem;
