import styled from "styled-components";
import { breakpoints } from "../../theme";

export const AboutWrapper = styled.section`
    @media ${breakpoints.tablet} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ImageWrapper = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media ${breakpoints.tablet} {
        flex: 1 1 390px;
        max-width: 585px;
    }
`;

export const AboutContent = styled.div`
    padding: 3.2rem 8%;
    margin: 0 auto;

    @media ${breakpoints.tablet} {
        flex: 1 1 47%;
        padding: 4rem 2rem;
    }

    @media ${breakpoints.laptop} {
        flex: 1 1 35%;
        padding: 4rem 3rem;
    }
`;

