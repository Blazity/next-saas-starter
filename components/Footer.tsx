import styled from 'styled-components';
import { FooterItems, SingleFooterList, SingleFooterListItem } from 'types';
import NextLink from 'next/link';


export default function Footer () {
    const footerItems: FooterItems = [
        {
            header: 'Company',
            listItem: [
                {title: 'About' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'News' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'}
            ]
        },
        {
            header: 'Product',
            listItem: [
                {title: 'Media Database' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Press Release Creator' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Online Newsroom' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Pricing' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'}
            ]
        },
        {
            header: 'Knowledge',
            listItem: [
                {title: 'Product Updates' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Blog' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Help Center' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'}
            ]
        },
        {
            header: 'Legal',
            listItem: [
                {title: 'Privacy Policy' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Terms of Service' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Billing Policy' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Data Procesing Clause' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'},
                {title: 'Brand Policy' , href: 'https://www.youtube.com/watch?v=T78nq62aQgM'}
            ]
        },
    ]

    return (
        <div>
            <ListContainer>
            {footerItems.map((singleItem) => (
                <FooterList key={singleItem.header} {...singleItem} />
            ))}
            </ListContainer>
            <FooterBar>
                <p>&copy; Copyright 2021</p>
            </FooterBar>
        </div>
    )
}


function FooterList({header, listItem}: SingleFooterList){
    return(
        <div>
            <ListHeader>{header}</ListHeader>
            {listItem.map((singleItem) => (
                <ListItem key={singleItem.href} {...singleItem} />
          ))}
        </div>
    )
}

function ListItem({ title, href }: SingleFooterListItem) {
    return(
        <ListItemWrapper>
            <NextLink href={href} passHref>
                <a>{title}</a>
            </NextLink>
        </ListItemWrapper>
    )
}

const ListContainer = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2.5rem;
      }
`

const ListHeader = styled.p`
    font-weight: bold;
    font-size: 2rem;
`
const ListItemWrapper = styled.p`
    font-size: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
    
    a {
        text-decoration: none;
        color: #696969;
    }
`
const FooterBar = styled.div`
    padding: 1.5rem;
`