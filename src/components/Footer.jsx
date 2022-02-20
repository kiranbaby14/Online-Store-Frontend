import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KB14</Logo>
                <Desc>sivbsiv</Desc>
                <SocialContainer>
                    <SocialIcon color="#3B5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="#E4405F">
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color="#55ACEE">
                        <Twitter />
                    </SocialIcon>

                </SocialContainer>
            </Left>

            <Center>
                <Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Screw Driver</ListItem>
                        <ListItem>Hammer</ListItem>
                        <ListItem>Spinner</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Title>
            </Center>

            <Right>
                <Title>Conatct</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>India, Kerala, Ernakulam
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>+91 7658975674
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>kb14@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer