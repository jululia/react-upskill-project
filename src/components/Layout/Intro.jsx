import { SunsetInStockholm } from "../SunsetInStockholm"

export const Intro = () => {
    const appContent = {
        intro: "Hi, I'm Julia and I am about to build an app which shows some interesting (and up-to-date) stats about the sun, such as when the sunrise and sunset is in different parts of the world. The reason I am building this app is to learn the concepts of React. React is a javacript framework which is very popular for building web apps. To start with, I made it so that it provides the sunset time for Stockholm, which you can see below.",
        outro: "The timestamp is sourced from a real-time API and will change on a daily basis. So if you check in tomorrow again, it will show a new time. Pretty cool right 😉",
      };


  return (
    <>
    <div className="intro">
    <p>{appContent.intro}</p>
    <SunsetInStockholm />
    <p>{appContent.outro}</p>
    </div>
    </>
  )
}

