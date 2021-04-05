import { Link } from "react-router-dom";
import styled from "styled-components";
import {breakpoints} from '../../theme';

export const NavBar = styled.nav`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    &.active {
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        height: 100vh;
    }
`;

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    padding: 2.5rem 2rem;

    ${NavBar}.active & {
        background-color: ${props => props.theme.colors.white};
    }

    @media ${breakpoints.tablet} {
        gap: 0;
    }
`;

export const MenuIcon = styled.button`
    cursor: pointer;

    @media ${breakpoints.tablet} {
        display: none;
    }
`;

export const Logo = styled.div`
    padding-left: 4rem;

    img {
        vertical-align: middle;
    }

    ${NavBar}.active & {
        display: none;
    }

    @media ${breakpoints.tablet} {
        padding-left: 2rem;
    }
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 3rem;
    padding: 2.4rem 2.5rem;
    width: 300px;
    opacity: 0;
    visibility: hidden;
    
    &.active {
        opacity: 1;
        visibility: visible;
        transition: opacity .5s;
    }

    @media ${breakpoints.tablet} {
        opacity: 1;
        visibility: visible;
        width: 220px;
        position: relative;
        padding: 2rem .5rem;
    }

    @media ${breakpoints.laptop} {
        width: 250px;
    }
`;

export const MenuLink = styled(Link)`
    color: ${props => props.theme.colors.black};
    position: relative;

    @media ${breakpoints.tablet} {
        color: ${props => props.theme.colors.white};

        &::after {
            position:absolute;
            content: '';
            bottom: -7px;
            left: 50%;
            width: 0;
            height: 1.5px;
            margin-left: calc(50% / -2);
            background-color: ${({theme}) => theme.colors.white};
            transition: width .4s;
        }

        &:hover::after {
            width: 50%;
        }
    }
`;
