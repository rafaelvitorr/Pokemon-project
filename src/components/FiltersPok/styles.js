import styled from "styled-components";

export const FiltersPokContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0.5rem;
   max-width: 100%;
   background-color: ${props=>props.theme.colors.box};
   justify-content: space-between;
`;

export const  ContainerFilters = styled.div`
   display: flex;  
   align-items: center;
   padding: 0.5rem;
   height: 6rem;
   max-width: 80%;
   border-radius: 0.5rem;
   margin-bottom: -1rem;
   background-color: ${props=>props.theme.colors.box};
   color: #f5f5f5;

   .boxDescription{
      padding: 0.5em 1.8em;
      color: #fff;
      background: gray;
      margin: 1rem;
      border-radius:0.8em;
      z-index: 1;
      width: 20em;
      background-color:#4dad5b;
      font-size: 1.4em;
   }
`;

export const  TabContainer = styled.div`
   display: flex;  
   align-items: center;
   justify-content: center;
   padding: 0.5rem;
   height: 3rem;
   width: 80%;
   color: #fff;
   max-width: 60%;
   border-radius: 0 0 6.5rem 6.5rem;
   margin-bottom: -1.5rem;
   background-color: ${props=>props.theme.colors.box};
`;