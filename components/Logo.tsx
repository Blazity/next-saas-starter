import styled from 'styled-components';
export default function Logo({ ...rest }) {
  return (
    <>
      {/* <div style={{ width: '24rem', height: '12rem', backgroundColor: boxBgColor, border: '10px solid', borderColor: boxBorderColor }} /> */}
      {/* <svg id="logo-34" width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <image href={`${colorMode}`} width="155" height="40" />
      </svg> */}
      <CustomButton id="logo" />
    </>
  );
}

// import { useColorSwitcher } from 'nextjs-color-mode';
// import styled from 'styled-components';

// export default function Logo({ ...rest }) {
//   const { colorMode } = useColorSwitcher();
//   // console.log(colorMode);

//   const sunIcon = './logo-white.svg';

//   const moonIcon = '.logo-black.svg';

//   return <CustomButton>{colorMode === 'light' ? moonIcon : sunIcon}</CustomButton>;
// }

const CustomButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  width: 12rem;
  height: 6rem;
  background: transparent;
  background-repeat: no-repeat;
  background-image: var(--logo);
`;
