import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import AutofitGrid from 'components/AutofitGrid';


export default function FeaturesPage() {
  return (
    <Page title="Hizmetler">
      <Wrapper>
        <CustomAutofitGrid>
          <Card>
            <h2>İnteraktif Oturumlar</h2>
            <p>
              50 dakikalık oturumlarımız, dil becerilerinizi adım adım geliştirmek için özenle tasarlanmıştır. Oturumlarımız
              karşılıklı etkileşimler, tartışmalar ve diyalog fırsatlarıyla donatılmıştır.
            </p>
            </Card>
            <Card>

            <h2>Kişiselleştirilmiş Geri Bildirim</h2>
            <p>Her oturumdan sonra size özel öneriler ve yapıcı geri bildirimler alacaksınız.</p>
            </Card>
            <Card>

            <h2>Esnek Konular</h2>
            <p>
              TertuliaTalks, psikoloji, çevre sorunları, teknoloji trendleri, kültürel çeşitlilik, genel sağlık, iş ve inovasyon,
              sanat ve yaratıcılık, bilim ve keşif, sosyal konular ve siyaset dahil ancak bunlarla sınırlı olmamak üzere çeşitli
              konuları kapsamaktadır.
            </p>
            <p>
              Tercih ettiğiniz konuları paylaşmanızı teşvik ediyoruz ve oturumlarımızı arzu ettiğiniz konularla uyumlu olacak
              şekilde özelleştiriyoruz.
            </p>
            </Card>

          </CustomAutofitGrid>
        <FeaturesGallery />

      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
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

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;
