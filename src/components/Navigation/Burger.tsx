import { useState } from 'react';
import * as styled from './styles';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <styled.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </styled.StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger