import styled from 'styled-components';
import NextLink from 'next/link';
import { media } from 'utils/media';
import { Container } from 'components/Container';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

export default function Footer() {
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

  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <ShareBar>
          <TwitterShareButton url={'https://www.youtube.com/watch?v=T78nq62aQgM'}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <FacebookShareButton url={'https://www.youtube.com/watch?v=T78nq62aQgM'}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url={'https://www.youtube.com/watch?v=T78nq62aQgM'}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </ShareBar>
        <Copyright>&copy; Copyright 2021</Copyright>
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

const FooterWrapper = styled.div``;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${media('<desktop')} {
    flex-direction: column;
  }
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;

const ListWrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: rgba(var(--text), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  color: rgba(var(--text), 0.75);
  margin-top: 0.5rem;
`;
