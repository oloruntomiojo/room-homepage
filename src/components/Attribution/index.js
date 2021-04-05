import { AttributionWrapper, ExternalLink } from "./AttributionStyles";

const Attribution = () => {
    return ( 
        <AttributionWrapper>
            <p>
                Challenge by &nbsp;
                <ExternalLink 
                    href="https://www.frontendmentor.io?ref=challenge"
                >
                    Frontend Mentor. &nbsp;
                </ExternalLink>
                
                Coded by &nbsp;
                <ExternalLink
                    href="https://www.frontendmentor.io/profile/tomi-david"
                >
                    Ojo Oloruntomi David
                </ExternalLink>
            </p>
        </AttributionWrapper>
     );
}
 
export default Attribution;