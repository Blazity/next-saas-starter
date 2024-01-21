// LandscapingIllustration.jsx

import React from 'react';
import styled from 'styled-components';

// Assuming you have an SVG file named 'landscaping-illustration.svg' in your assets folder
import { ReactComponent as LandscapingSVG } from 'public/landscaping-illustration.svg';

const IllustrationContainer = styled.div`
  // Add styles specific to the illustration container if needed
  width: 100%;
  max-width: 45rem; // You can adjust this as necessary
  margin: auto; // Centers the illustration in the container
  
  svg {
    width: 100%;
    height: auto;
    // Additional styles can be applied to the SVG if needed
  }
`;

const LandscapingIllustration = () => {
  return (
    <IllustrationContainer>
      {/* The SVG is imported as a ReactComponent, which lets you use it like a component */}
      <LandscapingSVG aria-label="Landscaping Illustration" />
    </IllustrationContainer>
  );
};

export default LandscapingIllustration;
