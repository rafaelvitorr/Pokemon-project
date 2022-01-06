import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background:${props=>props.theme.colors.background};
        font-size: 14px;
        color: ${props=>props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
    }
   h1{
        font-size: 2.8rem;
   }
   h2{
        font-size: 2.2rem;
   }
   h3{  
        font-size: 1.7rem;
   }
   h4{  
        font-size: 1.4rem;
   }
   h5{  
        font-size: 1.2rem;
  }
   h6{  
        font-size: 1rem;
   }
   hr{
       margin: 1rem 0;
   }
   .fontBold{
        font-weight: bold;
        color: ${props=>props.theme.colors.subText};
   }
   .flexRow{
      display: flex;
      flex-direction: row;
   }
   .noborder{
        border: none !important;
   }
   .capitalized {
	text-transform: capitalize;
 }
`;