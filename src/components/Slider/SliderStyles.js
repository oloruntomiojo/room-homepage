import styled from "styled-components";
import { breakpoints } from "../../theme";

export const SliderWrapper = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
`;

export const Slide = styled.div`

    @media ${breakpoints.tablet} {
        display: flex;
    }

    @media ${breakpoints.laptop} {
        height: 525px;
    }

    @media ${breakpoints.laptop} and (max-width: 1100px) {
        height: 560px;
    }

`;

export const SlideImage = styled.picture`
    position: relative;

    & img {
        width: 100%;
        object-fit: cover;

        @media ${breakpoints.tablet} {
            height: 100%;
        }
    }

    @media ${breakpoints.tablet} {
        flex: 1 0 55%;
    }

    @media ${breakpoints.desktop} {
        flex: 1 0 58%;
    }
`;

export const SlideContent = styled.div`
    padding: 3rem 8% 4rem;

    @media ${breakpoints.tablet} {
        padding: 6rem 2rem 9rem;
        flex: 1 0 45%;
    }

    @media ${breakpoints.laptop} {
        padding: 6rem 5% 9rem;
    }

    @media ${breakpoints.desktop} {
        padding: 6rem 6rem 6rem 6rem;
        flex: 1 0 42%;
    }
`;

export const SlideButton = styled.button`
    text-transform: uppercase;
    letter-spacing: 10px;
    display: flex;
    justify-content: space-between;
    width: 233px;
    font-weight: 500;
    margin-top: 5em;

    &:hover {
        color: ${({theme}) => theme.colors.darkGrey};

        path {
            fill: ${({theme}) => theme.colors.darkGrey};   
        }
    }

    @media ${breakpoints.tablet} {
        margin-top: 3em;
    }
`;

export const SliderController = styled.div`
    width: 111px;
    height: 55px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.black};
    position: absolute;
    top: calc(360px - 55px);
    right: 0;

    & button {
        flex: 1 0 50%;
        height: 100%;

        &:hover {
            background-color: ${({theme}) => theme.colors.charcoal};
        }
    }

    & img {
        width: 20%;
    }

    @media ${breakpoints.tablet} {
        width: 120px;
        height: 65px;
        top: calc(100% - 65px);
        right: calc(45% - 120px);
    }

    @media ${breakpoints.laptop} {
        width: 160px;
        height: 80px;
        top: calc(100% - 80px);
        right: calc(45% - 160px);
    }

    @media ${breakpoints.desktop} {
        right: calc(42% - 160px);
    }
`;