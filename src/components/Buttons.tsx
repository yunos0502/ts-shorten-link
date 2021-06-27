import { memo } from 'react';
import styled from 'styled-components';

export const DeleteLinkButton = styled.button`
  width: 20px;
  height: 20px;
  background: url('https://icongr.am/entypo/cross.svg?size=128&color=ff0040')
    no-repeat 50% / contain;
  display: inline-block;
  border: 0;
`;

export const CopyLinkButton = styled.button`
  width: 20px;
  height: 20px;
  background: url('https://icongr.am/feather/copy.svg?size=128&color=5c5c5c')
    no-repeat 50% / contain;
  display: inline-block;
  border: 0;
`;

interface ButtonTypes {
  delete: any;
  copy: any;
  [prop:string]: any;
}

const Buttons:ButtonTypes = {
  delete: DeleteLinkButton,
  copy: CopyLinkButton
}

const Button = memo((type: string) => Buttons[type]);

export default Button;
