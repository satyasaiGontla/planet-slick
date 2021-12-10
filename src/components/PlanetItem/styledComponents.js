import styled from 'styled-components'

export const Planet = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media screen and (min-width: 768px) {
    padding: 80px;
  }
`

export const PlanetImage = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 292px;
  }
`

export const PlanetName = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 22px;
`

export const PlanetDescription = styled.p`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 22px;
`
