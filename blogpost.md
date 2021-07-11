# What Street Art: A blog post
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/wsaposter3__1_.png)
When we first set off to create What Street Art, we envisioned an iOS app that would allow the user to discover local street by utilizing geolocation by tagging graffiti, murals, stencils and paste-ups on an interactive map. Not only that, but we aimed to provide a list of artworks in close proximity to the user and even recommend similar artworks to the user based on their previous clicks. 

But we sought to go even above and beyond said features. We wanted to offer our users the ability to utilize AI technology to identify an artwork either from using a device’s camera scan, or via an image upload. 

The biggest overarching question was, of course, „where do we start?“. This was the first time any of us would be working on a project of this category and scope and with a toolset of totally new skills. How did our did our tracks fit together? How would we apply our theoretical knowledge to a practical collaboration in a cross-functional team?



## UX

Our UX team first brainstormed a list of questions that later formed the basis for an online survey in order to determine who our potential users are and what functionality was needed for our app. While they waited on the results of this survey, they analyzed our three major competitors. Based on the results of the survey, in which 59 people participated, they were able to craft 2 main Personas and user flows. After discussing the feasibility of certain features, we decided to use iOS as our targeted operating system and a wireframe mockup on Figma was created. While DS and WD worked on the technical realization, UX reached out to their mentors online and tackled testing our prototype „in the field“. Two users were asked to complete five tasks using our app and three more tasks using a similar app called Street Art Cities. The users were asked to think aloud while peforming these tasks to give a general impression of both apps and their hand movemenst while using the apps were recorded via camera. This valuable input was collected and used to further evaluate feasible critique points and feature ideas into our prototype. Lastly, the UI was ideated, with five potential stlyes being presented to the team. Once the choice was made, the UX team began implementing the final touches.

![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/competitor_nalyses.jpeg)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/user_flow.jpeg)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/persona_with_user_story.jpeg)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/user_survey.jpeg)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/user_testing_1_720.png)




## DS

We knew right away that our project would require a dataset – but from where was the next challenge. The DS team decided to scrape the data using Python from Street Art Cities and Urban Nation, with their permission, to use as the basis for What Street Art. This data was then cleaned, duplicates between the datasets were removed, and everything was uploaded onto Firebase. The „Near You“, „Recently Added“ and „You Might Also Like“ features were created in Python as Flask APIs and deployed in Heroku. The „Near You“ feature locates all street art within a 2km radius of the user. There were two main machine learning models explored for the „You Might Also Like“ feature, namely ALS (Alternating Least Square) and the Jaccard score, in order to build a recommender system with collaborative filtering.



## WD

Since the goal was to create a mobile app, the WD decided to use Ionic React, as there are a ton of useful elements within this framework that are ready to use „out-of-the-box“. We also switched to Typescript instead of vanilla Javascript, for compile-time safety and code scalability. The first step was to build the basic structure of the app so we could easily plug in the necessary features once they were decided upon. Once we had a header and a bottom menu successfully routed to their corresponding destinations, the groundwork had been laid. We knew that we would definitely need image sliders and a map outfitted with geolocation functionality to populate with the data provided by the DS team. Using SwiperJS, we were able to implement an attractive and user-friendly container for our images and filled it with dummy data as a placeholder until we connected everything to the backend. Next, we had to tackle the map. We decided to use Leaflet to create an interactive map with customized pop-ups. Meanwhile, we implemented a camera function to be used later for AI’s Scan feature, that basically asks the user for permission to use their device’s camera to take photos and upload images. Overall, the biggest challenge we faced on the WD team was figuring out how to seamlessly draw the data from Firebase into our application. Once we managed this, it was about tweaking the finer details of our features and implementing the UI.

![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/flowmapp___information_architecture.jpeg)


## AI

The AI team created a convolutional neural network using heavy data augmentation given that we have just once instance per category. In the case of What Street Art, we wanted to predict the name (or id) of the artwork. In total, we ended up with 573 different categories, with one instance per category. The ultimate intention was to be able to upload an image, preprocess it to fit the requirements of the model and return predictions.  In order to improve the accuracy of these predictions, we used pre-trained models (ResNet50 and EfficientB0). In the end, a simplified dummy version was deployed, as the main product was too hefty to use for Heroku.


## Results

Overall, we managed to hit a good chunk of our target goals for our MVP1: an AI powered scan-function (although not integrated into the app), a geolocation-based map, murals filtered by popularity, proximity and latest upload in an image slider, additional artwork recommendations based on previous clicks, pages for each artwork displaying more details and an Explore page allowing the user to browse our database of images. 

Although our brains are still swarming with ideas for our MVP2, we are all proud of our journey and progress so far – as individuals, but more importantly, as a team. 

![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/screenshot_1.png)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/screenshot_2.png)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/screenshot_3.png)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/screenshot_4.png)
![Test Image 4](https://raw.githubusercontent.com/TechLabs-Berlin/st21-what-street-art/main/blogpost_images/screenshot_5.png)
