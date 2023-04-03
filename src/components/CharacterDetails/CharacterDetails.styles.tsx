import styled from 'styled-components'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

export const CharacterContainer = styled.div`
  border: 1px solid white;
  margin: 18px auto;
  width: 80%;
  padding: 10px;
`
export const ContentContainer = styled.div`
  width: 70%;
  margin: 40px auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Bold = styled.span`
  font-weight: bold;
`

export const Name = styled.h2`
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-left: 25px;
  }
`

export const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
`
export const BackIcon = styled(IoChevronBackCircleOutline)`
  font-size: 32px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`
