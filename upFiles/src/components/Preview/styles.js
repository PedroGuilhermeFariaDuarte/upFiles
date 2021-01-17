import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  /* border:1px solid red; */
  border-top: 1px solid #EDEBE9;
  padding-top:10px;
`
export const Content = styled.div`
  width: 100%;
  height: 230px;
  padding: 10px 10px;
  /* border: 1px solid blue; */
  overflow-y: auto;
`
export const Card = styled.div`
  width: 100%;
  min-height: 150px;
  height: auto;
  border-radius: 5px;
  overflow:hidden;
  border-radius: 5px;
  margin-bottom: 10px;

  display: flex;
  flex-flow: column;
  justify-content:space-around;
`

export const CardPreview = styled.div`
  width: 100%;
  height: 130px;
  background-color: #EDEBE9;
  background-image: url(${(props) => props.urlImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  #startUpload {
    width: ${(props) => `${props.widthPercent}%`};
    height: 130px;
    /* backdrop-filter: blur(2.7px); */
    /* background-color: #EDEBE990; */
  }

  #containerButtons {
    width: 100%;
    height:130px;
    position:absolute;
    top:0;
    z-index:100;
    /* border:1px solid red; */

    display: flex;
    flex-flow: row nowrap;
    justify-content:space-between;

    /* button {
      width: 0%;
      background-color: #e9eff3;
      font-weight: bold;
      color: #000;
      transition: width 0.5s cubic-bezier(0.53, 0.71, 0.62,-0.35);
      cursor: pointer;
      opacity: 1;

      &:hover {
        opacity:0.9;
        transition: all 0.2s cubic-bezier(0.47,-0.04, 1, 1);
      }
    }

    button + button {
      background-color: #edf3f7;
    }

    &:hover button{
      width: 48%;
      transition: width 0.7s cubic-bezier(0.47,-0.04, 1, 1);
    }

    &:hover button::after {
      content: "Enviar";
    }

    &:hover button + button::after {
      content: "Cancelar";
    }
   */
  }
`
export const CardFooter = styled.div`
  width:100%;
  height:20px;
  /* border:1px solid red; */
  padding:5px 5px;
`
export const ContainerSend = styled.div`
  width: 100%;
  height: 70px;
  /* border:1px solid blue; */
  padding: 15px 15px 15px 0px;
  font-size: 0.5rem;
  font-weight: 500;

  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  align-items: center;

`
export const ButtonSend = styled.button.attrs({
  type: 'button'
})`
  width:50%;
  height: 100%;
  background-color: #EDEBE9;
  border-radius: 5px;
  padding: 13px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
`
