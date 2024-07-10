import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Esnek ödeme</SectionTitle>
      <AutofitGrid>
      <PricingCard
          title="Deneme"
          description="TertuliaTalks'un sunduğu imkanları tek bir oturum ile deneyin."
          benefits={[
            'null', 
          ]}
          isOutlined
        >
          200TL<span>/oturum</span>
        </PricingCard>

        <PricingCard
          title="Temel Plan"
          description="Her hafta bir oturum ile 
          dil becerilerinizi düzenli olarak 
          geliştirin."
          benefits={[
            'null', 
          ]}        >
          680TL<span>/oturum</span>
        </PricingCard>

        <PricingCard
          title="Standart Plan"
          description="Daha yoğun bir programla her hafta iki oturum yaparak hızla ilerleyin."
          benefits={[
            'null', 
          ]}
        >
          1280TL<span>/oturum</span>
        </PricingCard>

        <PricingCard
          title="Bireysel oturumlar"
          description="Kişiselleştirilmiş derslerle ihtiyaçlarınıza özel çalışın.
Özel Programlar: Talep ve oturum sıklığına göre fiyatlandırılır - Kişisel veya Sektörel ihtiyaçlarınıza özel programlar oluşturun."
          benefits={[
            'null', 
          ]}
        >
          420TL<span>/oturum</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
