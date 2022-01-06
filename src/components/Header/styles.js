import styled from "styled-components";

export const HeaderContainer = styled.div`
   display: flex;  
   align-items: center;
   padding: 0.5rem;
   height: 4rem;
   background-color: ${props=>props.theme.colors.primary};
   justify-content: space-between;
`;
