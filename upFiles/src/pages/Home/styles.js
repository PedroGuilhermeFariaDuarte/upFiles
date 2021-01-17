import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(155.34deg,#e9eff3,#edf3f7,#e9eff3);
  background-size: 400% 400%;
  animation: AnimationName 7s cubic-bezier(0.32, 0.92, 0.28,-0.99) infinite;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 5px;
  padding: 15px;
  background-color:  #FAF9F8;
  border:1px solid #ccc;
  box-shadow: 0px 10px 0.9em  #201F1E08;

  display: flex;
  flex-flow: column;
  align-items: center;
`

export const LogoContainer = styled.div`
  width: 100%;
  min-height: 20px;
  height: auto;
  font-size: 1.9rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  cursor: default;
  user-select: none;
`
