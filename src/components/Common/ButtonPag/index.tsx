import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
  }

const Button = styled.button`

`
export default function ButtonPag({children}:Props) {
  return (
    <Button>
        {children}
    </Button>
  )
}
