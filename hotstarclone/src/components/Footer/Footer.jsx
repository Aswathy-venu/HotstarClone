import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: transparent;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    z-index:500;
`;
export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex; /* Add flex display to align items horizontally */
    justify-content: space-between; /* Add space between FooterDetails and FooterView */
`;

export const FooterDetails = styled.div`
    width: 50%;  
    text-align: left;
    h1{
         font-size:14px;
         margin-bottom:25px;
         margin-left:110px;
      }
      p{
         margin-left:110px;
         text-align:left;
         font-size:12px;
         color:grey;
      }
     
`;

export const FooterView = styled.div`
    width: 50%;
    text-align: left; 
    h1{
         font-size:14px;
         margin-bottom:25px;
         margin-left: 110px;
      }
      p{
        margin-left: 110px;
         text-align:left;
         font-size:12px;
         color:grey;
      }
`;

export const FooterHelp = styled.div`
    width: 50%;
    text-align: left; 
    h1{
         font-size:14px;
         margin-bottom:25px;
         margin-left: 110px;
      }
      p{
        margin-left: 110px;
         text-align:left;
         font-size:12px;
         color:grey;
      }
`;

export const FooterConnect = styled.div`
    width: 50%;
    text-align: left; 
    h1{
         font-size:14px;
         margin-bottom:25px;
         margin-left: 110px;
      }
      p{
        margin-left: 110px;
         text-align:left;
         font-size:12px;
         color:grey;
      }
`;
export const FooterRight = styled.div`
    display: flex;
    justify-content: flex-end; /* Align items to the right */
    align-items: center;
    text-align: left;

    p {
        margin-right: 630px;
        font-size: 12px;
        color: grey;
    }

    img {
        width: 110px;
        margin-right: 20px;
    }
`;

