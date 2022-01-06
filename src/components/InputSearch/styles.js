import styled from "styled-components";

export const ContainerSearch = styled.div`
   display: flex;  
   align-items: center;
   height: 2.5rem;
   overflow: hidden;
   border-radius: 0.5rem 0.5rem;
   background-color: #f5f5f5;
   position: relative;
   max-width:30rem;
   min-width:30rem;

`;
export const InputSearchStyle = styled.input`
   max-width:100%;
   min-width:100%;
   height: 2.5rem;
   font-size: 1.5rem;
   padding: 0.5rem;
   background: none;
   border: none;
   padding-right: 4.3rem;
   border-radius: 0.5rem 0.5rem;
   &:focus {
      border: 2px solid yellow;
      outline: none;
   };
`;
export const ButtonInputSearch = styled.button`
  border: none;
  background: none;
  height: 2.5rem;
  max-width:4rem;
  min-width:4rem ;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  right: 0;
  &:hover{
     filter(brightness(90%));
  }
`;