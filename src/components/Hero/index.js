import styled from "styled-components";
import { data } from './data';
import Slider from "../Slider";

const HeroContainer = styled.section``;

const Hero = () => {

    return ( 
        <HeroContainer>
            <Slider data={data} />
        </HeroContainer>
     );
}
 
export default Hero;