import styled from 'styled-components';
import React from 'react';
import NextImage from 'next/image';
import AutofitGrid from 'components/AutofitGrid';
import { Container } from 'components/Container';
import { media } from 'utils/media';

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        <Card>
          <NextImage src="/grid-icons/asset-1.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-2.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-3.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-4.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-5.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-6.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-7.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-8.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
        <Card>
          <NextImage src="/grid-icons/asset-9.svg" width={128} height={128} />
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos
            doloribus voluptate?
          </Description>
        </Card>
      </CustomAutofitGrid>
    </Container>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  background: rgba(var(--secondary), 0.025);
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
