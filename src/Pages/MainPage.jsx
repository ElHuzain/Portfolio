import { styled } from 'styled-components';
import LeftSide from '../Components/MainPageComponents/Content/LeftSide/LeftSide';
import RightSide from '../Components/MainPageComponents/Content/RightSide/RightSide';
import Header from '../Components/MainPageComponents/Header/Header';
import CTA from '../Components/MainPageComponents/CTA/CTA';
import { useSpring, animated } from '@react-spring/web'

const StyledMainPage = styled(animated.div)`
    position: relative;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    & > div {
        display: flex;
        justify-content: space-between;
        margin: auto 0;
    }
    height: 100%;

    @media only screen AND (max-width: ${({ theme }) => theme.screen.small_desktop}){
        & > div {
            flex-direction: column-reverse;
            gap: 2rem;
        }

    }

    @media only screen AND (max-height: 800px) {
        height: 100% !important;
        overflow: scroll;
    }
`

const MainPage = ({ click }) => {

    const springs = useSpring({
        from: { opacity: 0, y: -100 },
        to: { opacity: 1, y: 0 },
    })

    return (
        <StyledMainPage style={springs}>
            <Header />
            <div>
                <LeftSide />
                <RightSide />
            </div>
            <CTA close={click} />
        </StyledMainPage>
    )
}

export default MainPage
