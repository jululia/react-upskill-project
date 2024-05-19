
import { Container } from "../components/Layout/Container";
import { GeoLocation } from "../components/GeoLocation";


export const HomePage = () => {
    return (
        <>
            <div className="intro"></div>
            <Container />
            <GeoLocation />
            <div className='bottom-space' />
            <div className='bottom-space' />
            <p>That's it for now :)</p>
            
        </>
    )
}
