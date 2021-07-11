# What Street Art

**What Street Art** is an app designed to explore murals in your city. It enables you to find artworks and creators by map, listed views, and a scan option. You can save and collect the artworks you see every day in your street.

**What Street Art** is a project participating in the Techlabs Summer Term 2021.

## Installation and Setup Instructions    
Clone down this repository. You will need node, and npm/yarn installed globally on your machine.  
  
Installation:  
`npm install`  `cd wsa-front`  `yarn`  

Open a new terminal tab and then:  
`cd wsa-front`  `yarn start`  
  
To Visit App:  
localhost:3000/Home  
  
The App is best viewed as a iOS. (Right click on Browser > Inspect > Iphone 6/7/8/Plus)  
  
  
## Team
* **UX** Anna Lebedenko
* **UX** Luca-Elia Salomon
* **WD** Laura Dobson
* **WD** Matheus Passos
* **DS** Daryna Kubar
* **DS** Emma Carballal
* **AI** Fernando Muñoz

## Mentor
Matheus Albuquerque

## UX links
* Survey: https://tripetto.app/run/X8ZN4Y5R9C
* Competitor analysis: https://miro.com/app/board/o9J_lEknq80=/
* UI Ideas: https://www.figma.com/proto/uBhYU7XNDItIfeX0W22MH9/WhatStreetArt-Everything?page-id=577%3A22429&node-id=644%3A17338&viewport=-1882%2C876%2C0.5704072713851929&scaling=scale-down
* Information Architecture: https://www.figma.com/file/GXLM25Hr0alx7nvXsi88qO/IA-What-Street-Art?node-id=0%3A1
* Wireframes: https://www.figma.com/proto/uBhYU7XNDItIfeX0W22MH9/WhatStreetArt---Everything?page-id=0%3A1&node-id=169%3A6490&viewport=-1034%2C780%2C0.5655179023742676&scaling=scale-down

## UX files (also added as files to repo) 
* Survey results: https://drive.google.com/file/d/13nYSZNK-Jq7_PoHjQyj9im99mxo1893V/view?usp=sharing
* Takeaways from survey: https://drive.google.com/file/d/1nepQetgroU-0KdtaFPfOw_DRkiIoB-kB/view?usp=sharing
* Personas and stories: https://drive.google.com/file/d/1DfAZjearYeFMbfK_qvsjHWEID0dy9QBK/view?usp=sharing
* User Flows: https://docs.google.com/document/d/15g3REpC4PUHIWIS84XcWqIxLu8sZpnLfF__5KEVcicQ/edit?usp=sharing
* User Testing summary: https://docs.google.com/spreadsheets/d/1Di070KAM8wMYWG7IhdW2v_TAwWXD5taZsVjQF-deJkg/edit?usp=sharing

## Deployed Features
Repo: https://github.com/dkubar/st21-what-street-art-deployed.git
* ### "Near you" feature 
    Example access: https://what-street-art-app.herokuapp.com/near-you?lat=52.5156609&lng=13.3768537
* ### "You might also like" feature 
    Example access: https://what-street-art-app.herokuapp.com/ymal?id=523
* ### "Scan" feature
    Works locally by running the file test_image_ResNet50.py
    It is important to notice that in order to properly work, the weights have to be downloaded from https://drive.google.com/file/d/1YppEQhKfix3zqRfIPTRfX7p-rQV6khMd/view?usp=sharing and placed inside the ResNet50 folder.
    
    Besides this, a dummy model has been deployed in http://wsa-simple.herokuapp.com/ though its functionalities are still to be fully implemented.

## Acknowledgements
We would like to thank our mentors, track leads and heads of journey at Techlabs who generously donated their time and expertise to guide us through this learning journey, especially:
Snježana "Anna" Frketic, Daniel da Rocha, Zubin John, Matheus Albuquerque, Maximilian Schall, Saumya Bhatt, Luciana Serna Wills, Benedikt Ulrich, Andrey Skabelin.
