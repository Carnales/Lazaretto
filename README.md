# <p align="center">**Lazaretto**</p>
## <p align="center">*Confine the toxicity*</p>

## Guide

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ey_374G-SYg/0.jpg)](https://www.youtube.com/watch?v=ey_374G-SYg)

<div style="text-align:center">
    <img src="images\P1.png" />
</div>

## What inspired us?

The beauty of the internet is followed by a shadow of twisted anarchy manifested through abuse and harassment.

> "59% of U.S. teens have been bullied or harassed online" (Pew Research Center, 2018).

> "Students who experienced bullying or cyberbullying are nearly 2 times more likely to attempt suicide" (Hinduja & Patchin, 2018).

The problem of cyberbullying inspired us because its devastating impact on teenagers increases as the internet grows and as we become more dependent on technology. Yet, there are no measures taken to improve the protection against hatred and harassment online, especially for minors. **Thus, in an attempt against all odds to stand between hateful comments and vulnerable viewers, we decided to make Lazaretto...**

#### It's time to confine the toxicity. It's time to put it in a *lazaretto*.

## What it does

Lazaretto is a browser extention which uses machine learning to prevent the spread of toxicity and it's exposure. It does so with two features, currently working on YouTube videos:

#### Preventing toxic comments
Once installed, lazaretto follows a 5 step process to prevent users from posting toxic comments. See the video for an explanation, or in summary: Lazaretto injects custom HTML to replace the YouTube comment button, so when you click comment Lazaretto first processes the text with it's tensorflow.js toxicity model, then either prompts the user to review the comment and be nicer or allows them to comment. 

#### Toxicity Percentage Warning
Within the first seconds of loading any video, Lazaretto scrapes every comment on the video, classifies it as toxic or not using machine learning, and then reports the number in a beautiful pop up message in the top-right. The viewer can therefore see it and decide to not read the comment section, because its very toxic and full of insults! 

**In summary, Lazaretto *confines toxicity* in two ways: by preventing it's spread, and preventing its exposure. With powerful AI packed into a tiny logo in the top of the browser, Lazaretto takes the first steps to stopping toxiciy and cyberbullying on the internet!**


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

### Our challenges with DCP - please read!
The hardest part was using all the APIs, particularly the DCP API. We practically had a supercomputer at our disposal, yet using it was very difficult. Actually, we spent about 12 consecutive hours trying to get it to work in a chrome extension. We tried:
1. Bundling the entire project locally
2. Webbundling using Webpack and Parcel
2. Hosting DCP locally
3. Avoiding CSP with sneaky hacks
4. Inline scripting with all CSP args whitelists
5. Hosting a local webserver with websocket communication to the chrome extension
6. and much much more.

None of these worked because of the implementation of **Content Security Policy (or CSP)**. While the extension works flawlessly, we could not use Distributive Computing because it's **disabled by design for security reasons in chrome extensions.**

We kept on trying to find different solutions and never gave up. In retrospect we should not have used a chrome extension as a platform. Nonetheless, we are proud of our attempts to include it. There are three branches in the GitHub repo. DCP-branch implements DCP but it's deprecated because of Content Security Policy, but this is still a technically succesful implementation of DCP! The local-hosted branch attempts to host DCP locally, but fails to communicate with other dependencies. The main branch works flawlessly, but no DCP :(. We hope you acknowledge these attempts!

## What's next for Lazaretto
We have big plans for Lazaretto and due to our complications with DCP and content security policies we hope that in the future those could be resolved. **We really do think Lazaretto's future resides in DCP's access to parallel computing and we will try our best to get there.** 

We also plan to expand Lazaretto's reach to new online platforms to continue our fight against hate-speech. With this expansion, we plan to introduced many QOL changes to futher ease the user such as: 
1. opt-in censorship
2. real-time livestream comment toxicity analysis
3. customizable toxicity flagging
4. optional meditative exercises as a popup to detecting hate-speech in the user's comment
5. web app integration 


###Thanks for reading, and I hope you enjoy the project!!! Made with <3 from two sides of the world
