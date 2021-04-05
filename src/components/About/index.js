import image1 from "../../assets/images/image-about-dark.jpg";
import image2 from "../../assets/images/image-about-light.jpg";
import { 
    AboutContent,
    AboutWrapper, 
    ImageWrapper 
} from "./AboutStyles";

const About = () => {
    return ( 
        <AboutWrapper>
            <ImageWrapper>
                <img src={image1} alt="two chairs and a table"/>
            </ImageWrapper>
            <AboutContent>
                <h3>About our Furniture</h3>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </AboutContent>
            <ImageWrapper>
                <img src={image2} alt="a single chair"/>
            </ImageWrapper>
        </AboutWrapper>
     );
}
 
export default About;