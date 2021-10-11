import styled from 'styled-components';
import NextLink from 'next/link';
import { media } from 'utils/media';
import Container from 'components/Container';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'About', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'News', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
    ],
  },
  {
    title: 'Product',
    items: [
      { title: 'Media Database', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Press Release Creator', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Online Newsroom', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Pricing', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'Product Updates', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Blog', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Help Center', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'Privacy Policy', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Terms of Service', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Billing Policy', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Data Procesing Clause', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
      { title: 'Brand Policy', href: 'https://www.youtube.com/watch?v=T78nq62aQgM' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/my-saas-startup" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2021 My Saas Startup</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  margin-top: 10rem;
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
