import React from 'react';
import * as Elements from '../DetailedPage/DetailedPage.Style';

        
        const DetailedPage = () => {
          return (
            <Elements.PageContainer>
              <Elements.Heading>Welcome to My Simple Page!</Elements.Heading>
              <Elements.Paragraph>
                This is a sample page created using Styled Components. Styled Components allows you to write actual CSS code to style your components directly in your JavaScript files.
              </Elements.Paragraph>
              <Elements.Paragraph>
                It provides a convenient way to encapsulate styles and create reusable components. With Styled Components, you can easily maintain and manage styles for your entire application.
              </Elements.Paragraph>
            </Elements.PageContainer>
          );
        };
        
        export default DetailedPage;
        
