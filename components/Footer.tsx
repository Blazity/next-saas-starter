import styled from 'styled-components';


export default function Footer () {
    return (
        <ListContainer>
            <List>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </List>
            <List>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                </List>
            <List>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
             </List>
            <List>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </List>
            <List>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </List>
        </ListContainer>
    )
}

const ListContainer = styled.div`
    display: flex;    
    flex-direction: row;
`

const List = styled.ul`
    flex-basis: 20%;
    list-style-type: none;
`
