import styled from "styled-components";

export const ContainerInfo = styled.section`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 1.5rem 5rem;
   height: 70vh;

   main{
      display: flex;
      margin: 0 0.5rem!important;
      padding: 1rem;
   }
   main:first-child {
      background-color:${props=>props.theme.colors.subBackground};
      border-radius: 0.5rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
      max-width: 36rem;
      flex-direction: column;
      flex: 1.5;
      position: relative;
   }
   main:first-child>img{
      max-width: 34rem;
      height: 90%;
   }
   main:first-child>span{
      padding: 0.3rem;
      background-color:${props=>props.theme.colors.tertiary};
      max-width: 12rem;
      position: absolute;
      top: 0rem;
      font-weight: bold;
      border-radius: 0.1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
   }
   main:last-child {
      flex-direction: column;
      flex: 3

   }

   .react-tabs__tab--selected{
      color:${props=>props.theme.colors.text};
      background:${props=>props.theme.colors.background}; ;
   }
   .infoSubtitle{
      display: flex;
      flex-direction: column;
      margin: 0.3rem 0.2rem 0.9rem 0;
      padding: 0.5rem;
      border-left: 1px solid ${props=>props.theme.colors.subText};

   }
   .infoSubtitle>span:first-child{
      font-size: 1.5rem;
      text-align: center;
      justify-content:center;
   }
   .infoSubtitle>span:last-child{
      font-size: 1.2rem;
      text-align: center;
   }
   .fontBold{
    font-size: 1rem;
    padding: 0 0.4em;
    margin: 0 0.2rem;
    font-size: 1.5rem;
    border: 1px solid #00000040;
    border-radius: 5px;
   }
   .buttonsBox{
      display: flex;
      justify-content: flex-end;
   }
   #setPokedex{
      background-color:${props=>props.theme.colors.tertiary};
      &:hover{
       background: #f3ca00;
      }
   }
   #removePok{
      background-color:${props=>props.theme.colors.secundary};
      &:hover{
       background: #8f1613;
      }
   }
   .buttons{
    border-radius: 0.5rem;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.6rem;
    max-width: 12rem;
    cursor: pointer;
    margin: 0 0.5rem;
   }
`;