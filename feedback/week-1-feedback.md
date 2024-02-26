# Week 1 - Feedback

## Student Input

` Yes. When I open the app on my phone it is zoomed in a bit too much. Why is this? I need to zoom out manully to make sure everything fits the screen. Update, I manage to solve this by reducing the min-width, but would still be nice to have this explained and understand what best practices are.`

### Teacher Input

Hey Julia, the reason here is simply due to a simple maath error:

both id + class of #root + .examples have a 2rem overall padding beinng applied thus in px foormat it would be 32px per elememnt so total of 64px in padding where in smaller viewports, such as a mobile it was playing agians the size of the immg which was initally set to 250px thus it was trying to fit an image with the properties of 250px + a total of 64px on eachside of padding thus a total of 314px with a total amount of screen size of avg of 320px. So it was ooverlapping in the screenn causing this little issue.

As you have done, you can switch the size much like you have done it will resolve the issue cause the img has now space to "breathe" within the documennt.

P.S - line 37, of your index.css file has a typo on the value ;) it has 250çpx
