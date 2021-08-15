# <p align="center">**Lazaretto**</p>
## <p align="center">*Confine the toxicity*</p>

## What inspired us?

The beauty of the internet is followed by a shadow of twisted anarchy manifested through abuse and harassment.

> "59% of U.S. teens have been bullied or harassed online" (Pew Research Center, 2018).

> "Students who experienced bullying or cyberbullying are nearly 2 times more likely to attempt suicide" (Hinduja & Patchin, 2018).

The problem of cyberbullying inspired us because its devastating impact on teenagers increases as the internet grows and as we become more dependent on technology. Yet, there are no measures taken to improve the protection against hatred and harassment online, especially for minors. **Thus, in an attempt against all odds to stand between hateful comments and vulnerable viewers, we decided to make Lazaretto...**

#### It's time to confine the toxicity. It's time to put it in a *lazaretto*.


## What did we learn?

Throughout this process we were enlightened by new knowledge while being challenged by newly encountered problems.

On one hand, this was all new to us so everything we made, we learned along the way. Everything from making a chrome extension, YouTube APIs, tensorflow.js for machine learning, web scraping, and using DCP - it's all new to us, we've never used any of these technologies before.

Make no mistake, **it was painful to learn all this in a two day hackathon**... AND make the actual product at the same time. It was hours -- nay, two whole days -- of scouring deprecated documentations, stackoverflow posts from 2010 which just said "no, you're wrong", and of the good old console.log("fart") to debug where the code stopped working.  

At the end of the day, we learned a whole lot of new technologies that we can now use with more fluency. We learned how to make chrome extensions to automate our social media browsing, machine learning to classify how mad we are when SyntaxError occurs, and a whole world of super computing! *This was an invaluable learning experience, so thank you to everyone involved in this Hackathon!*

On the social side of things, we learned a lot about cyberbullying. Middle school counselors often tell us not to cyberbully, but we laugh at this and move on. However, this is a serious problem with absolutely no regulation right now. We learned a lot about the dangers of it and the impact it has on people, particularly children.

## How did we build this project?

Whoa, we build it in an *unconventional way*.

Firstly, we're two people, one of us is in the US, the other in Qatar. We are quite literally half a world apart, so these 2 days felt more like 2 nights of both of us staying up untill 2 AM. But, with the power of friendship and determination, we persevered and made it despite the odds.

Okay okay, you probably mean how we *programmed* it. At its core, its a Chrome extension for your browser. That involves a lot of javascript, mixed with jquery, HTML, and CSS. We use these languages around the extension framework which is made up of several components, and the chrome API which lets use interact with the browser.

Thats the visual stuff. We also use the YouTube Data Analytics API to retreive the thousands of comments on each video, and the Distributed Computer Protocol API to make it process a lot faster.

Process what, you may ask? Well, the machine learning, of course.
Lazaretto uses tensorflow.js and a toxicity classifying model which uses six toxicity profiles and attempts to see whether they match the given comment. That is how we rate the toxicity in the video comments.

## What challenges did we face?

For one, chrome extensions are NOT MEANT FOR AI CLASSIFICATION. We found that out... the hard way.

Learning new technologies was the most challenging, yet simoultaneosly the most rewarding. It was hard to understand manifests, content script, and the chrome extension environment in general.

It was also very challenging to learn machine learning, basically from scratch. We had to assess the effectiveness of each model, tweak it to meet our application, and use it in a chrome extension.

The hardest part was using all the APIs, particularly the DCP API. We practically had a supercomputer at our disposal, yet using it was very difficult. Actually, we spent about 12 consecutive hours trying to get it to work in a chrome extension. Because of Content Security Policy, we had to try:
1. Bundling the entire project locally
2. Hosting DCP locally
3. Avoiding CSP with sneaky hacks
4. Hosting a local webserver with websocket communication to the chrome extension
5. and much much more.

None of these worked, so while we had a beautifully working extension, the biggest challenge was making it work in a chrome extension which simply is not made for this, as it does not even support importing external libraries to begin with.

While challenging, we kept on trying to find different solutions and never gave up. In retrospect we see using the chrome extension as faulty, but are proud of our attempts to include it. We explain this better in the video, and you can see two branches in the GitHub repo: one with DCP but it's deprecated because of Content Security Policy, and one without it, which works fine but no DCP :(

###Thanks for reading, and I hope you enjoy the project!!! Made with <3 from two sides of the world
