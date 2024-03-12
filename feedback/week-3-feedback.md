# Week 3 - Feedback

## Student Input

- `On row 23 in the SunsetApi.jsx file I am checking the type of "timestring". When the app is rendered for the first time there is no response from the api and without this if statement the code wouldn't work. But is there a better way to handle this?`
- ` Is there a smarter way to handle the data per each city in Container.jsx? Should I have some sort of configuration file instead? Or maybe it should just be the city? And the latitude, longitude and timezone data I should fetch from an API based on the City?`

### Teacher Output

#### Feedback 1

Hey Julia, I refactored a bit of your SunsetAPI comp which you can find a copy called sunsetApiRefactored where I focused on not calling the function directly within the return ststement but above it where you tried fetching the `formatTime(sunData.sunset)` but to no avail cause I did not work. I tried adding some conditional rendering within the jsx to display a simple p tag betwen the time you get a response from the API but also, I still had the same behaviour. Now, to the actual conditional logic within the function called formatTime, if you see on the refactored version I set `string` to an empty value through the same use of let where then within the if conditional I femoved the typeof given the fact that it's implied yet, the callStack acts the same so we are in a scenario where subjectivity comes to play. Now, for the useEffect where you were fetching the prommises I went ahead and refactoredd to include async/await structure for better optmisiation. Simple change with a lot of power. Please revie and refactor your code accordingly.

#### Feedback 2

2 approaches here, if you will know a certain set of cities will be the only ones that will always display the related information then my opinion is to store that data locally inside a json csause is just namme, lat, long and timezone. I duplicated your container component to have a refactored version for you to review how to do this using an useEffect to fetch the dasta locally which will be the same if you decided to use an API like `https://api-ninjas.com/api/geocoding` for example but still, it depends up to you, the structure on react is still similar using the useEffect.
