import styled from "styled-components";

export const AttributionWrapper = styled.section`
    padding: 1rem 2rem;
    
    p {
        color: ${({theme}) => theme.colors.black};
        text-align: center;
    }
`;

export const ExternalLink = styled.a.attrs({
    target: "_blank",
    rel: "noopener",
})`
    display: inline-block;
    color: hsl(238, 45%, 44%);
    font-weight: 700;
`;