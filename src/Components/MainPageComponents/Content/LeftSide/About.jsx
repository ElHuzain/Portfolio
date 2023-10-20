import { styled } from 'styled-components';
import Text, { Bold, Italic } from '../../../General/Text.styled';
import { TextButton } from '../../../General/Button.styled';
import { useState } from 'react';
import Flex from '../../../General/Flex.styled';

const SyledAbout = styled.div`
display: flex;
flex-direction: column;
gap: 0.6rem !important;
max-width: 525px;
hr {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text};
    border: none;
}
`

const Navigation = styled.div`
`

const MobileView = styled.div`
  gap: 1.5rem;
  width: 100%;
  justify-content: space-between;
  display: none !important;
  
  @media only screen AND (max-width: ${({ theme }) => theme.screen.medium_mobile}) {
    display: flex !important; 
  }
  
  div:first-of-type {
    img {
        transform: rotate(180deg);
        &:hover {
          transform: rotate(180deg) scale(1.1);
        }
    }
  }
  
  div:last-of-type:hover {
    img {
        transform: scale(1.1);
    }
  }
  `
const DesktopView = styled.div`
  display: flex;
  gap: 1.5rem;
  /* width: 100%; */
  
  @media only screen AND (max-width: ${({ theme }) => theme.screen.medium_mobile}) {
    display: none !important;
  }
  `

const Content = styled.div`
  height: 80px;
`

const About = () => {
    const [selected, setSelected] = useState(0);
    // const [content, setContent] = useState('');

    const ContextObject = [
        <Flex><Text>I am a <Bold>fresh Computer Science graduate, department of Information Systems</Bold>. I have been learning Front-End Development for roughly 4 months now. And I am currently <Bold>learning how to write highly scalable and easily maintainable code</Bold>.</Text></Flex>,
        <Text>Experienced with the core web tech (<Bold>HTML</Bold>, <Bold>CSS</Bold>, <Bold>JS</Bold>) as well as the popular framework <Bold>React.js</Bold>.
            In addition to frameworks & libraries such as <Bold>Redux</Bold>, <Bold>React-Router</Bold>, and <Bold>Styled-Components</Bold>.</Text>,
        <Flex direction='column'><Text>I am currently working as a <Bold>Teacher Assistant</Bold> in <Italic>Modern university of technology & information</Italic>.</Text>
            <Text>The courses I teach for are <Bold>Mathematical Analysis I</Bold>, <Bold>Linear Algebra I</Bold>, <Bold>Discrete Mathematics</Bold>, and <Bold>Object Oriented Database</Bold></Text></Flex>,
        <Text>I am currently seeking an internship or a part-time job in Front-End Development. Preferably with ReactJS. If you are interested in hiring me, contact me by clicking on <Bold>WhatsApp</Bold> button ^^</Text>,
    ]

    const select = (selection) => { console.log("E"); setSelected(selection); }
    const swipeLeft = () => {
        if (selected === 0) setSelected(ContextObject.length - 1);
        else setSelected(prev => prev - 1);
    }
    const swipeRight = () => {
        if (selected + 1 === ContextObject.length) setSelected(0);
        else setSelected(prev => prev + 1);
    }

    const returnCurrent = () => {
        switch (selected) {
            case 0: return 'About';
            case 1: return 'My Tools';
            case 2: return 'Current Position';
            case 3: return 'Hire Me';
            default: return;
        }
    }

    return (
        <SyledAbout>
            <Navigation>
                <MobileView>
                    <div>
                        <img alt='' onClick={swipeLeft} src="./images/buttons/arrow.svg" />
                    </div>
                    <Text><Bold>{returnCurrent()}</Bold></Text>
                    <div>
                        <img alt='' onClick={swipeRight} src="./images/buttons/arrow.svg" />
                    </div>
                </MobileView>
                <DesktopView>
                    <TextButton click={() => select(0)} bold={selected === 0 && true} text="About" />
                    <TextButton click={() => select(1)} bold={selected === 1 && true} text="My Tools" />
                    <TextButton click={() => select(2)} bold={selected === 2 && true} text="Current Position" />
                    <TextButton click={() => select(3)} bold={selected === 3 && true} text="Hire Me" />
                </DesktopView>
            </Navigation>
            <hr />
            <Content>
                <Text>{ContextObject[selected]}</Text>
            </Content>
        </SyledAbout>
    )
}

export default About;