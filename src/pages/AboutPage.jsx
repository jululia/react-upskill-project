import { Intro } from "../components/Layout/Intro";
export const AboutPage = () => {

    const image =
        "https://cdn.wegow.com/media/artists/red-hot-chili-peppers/red-hot-chili-peppers-1634893172.0399256.1780x720.jpg";

    return (
        <>
            <Intro className="intro" />
            <div className='bottom-space' />
            <div className='bottom-space' />
            <p>That's it for now :)</p>
        </>
    );
};