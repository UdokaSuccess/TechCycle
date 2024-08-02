# Tech Cycle Development Documentation

**Product**

Tech Cycle is a website that sources gadgets from donors, refurbishes the laptops, and makes them available to recipients.


 
 ***Screenshots***
 <img width="941" alt="Screenshot 2024-08-02 080623" src="https://github.com/user-attachments/assets/8e1519fa-4f17-45c0-9135-7ace801d6089">




 **Technologies**

 React.js, CSS, NPM, Git

 React is a javscript library for building reusable UI components. It is a lightweight, and easily scalable library that helps achieve product requirements by providing a good UI architecture, page routing, and maintainable code.

 Vanilla CSS styling provides a flexible, fully customisable foundation for design implementation and web  design.
 

 **Integration**

Tech Cycle website runs on Node Package Manager(NPM) 



**Backend API**

Firebase was utilized for authentication and firestore cloud was used as a database


**Application Architecture**

When a user interacts with our application, the App routes them to the correct page, and each page contains some UI components, and business logic.


<img width="365" alt="Screenshot 2024-04-11 034933" src="https://github.com/UdokaSuccess/TechCycle/assets/108351016/29f0dc76-a1ef-4f28-abb6-c781d044b5ce">


**Folder Structure**

```
> public 
   index.html       #main entry point of this application
> src
   > Pages          
      > components  #all UI components are found here
      > images      #image assets
    App.js          #App component and contains most of the logic
    Index.js        #React starting point
    Index.css       #Application stylesheet
    Navbar.js     
    package.json    #npm dependencies
    package-lock.json 
    README.md       #product Documentation

```



**Design Implementation**

The design mockups were converted to a website by:

* **Breaking the design into React components**

<img width="551" alt="Screenshot 2024-04-11 172230" src="https://github.com/UdokaSuccess/TechCycle/assets/108351016/158bdbcf-f392-49eb-a0d3-bdc374ae1944">



* **Semantic Markup**

<img width="453" alt="Screenshot 2024-04-11 153026" src="https://github.com/UdokaSuccess/TechCycle/assets/108351016/b4dfb494-a742-4222-9c67-ef64be2c1c0d">



* **CSS styling**: using box model(margin, padding, border), flexbox, variables, positioning, animations, and pseudo classes.

<img width="180" alt="Screenshot 2024-04-11 133949" src="https://github.com/UdokaSuccess/TechCycle/assets/108351016/b2b7f45c-6257-4e16-afeb-94011b1cf1b0">



**Adjustments for Responsiveness**

The use of modern design systems such as flexbox, grid ensures responsiveness across mobile devices. The use of relative measurements such as Rem etc instead of fixed units helps for mobile responsiveness as it is always relative to the screen size.

Media queries while targeting correct breakpoints gives full control, and flexibility of what scmaller screens should look like.


**Functionality**

HTML5 Form Validation

React Hooks for state management

React Context Api for more complex states, and to avoid props drilling.



**Coding Practise**

Clean Coding: Also known as DRY( Don't repeat Yourself) code;

Clear Folder structure

Code Formatting: by using prettier code extension, and writing explanatory comments on code 


**Accessiblity**

Accessibility measures includes; the use of alternative texts on images, titles on icons, and semantic markup.


**Search Engine Optimization**

Meta tags and description helps to improve website optimization on search engines.


**Performance**

React Routing: Easy Navigation of pages without reloading helps improve performance and overall user experience.

Image Optimisation: by minimizing images size, and using .png, .webp images.


**Version Control**


*Git* commands such as: git commit, git push, git log, git checkout etc, were used in verson control and change tracking on this project.


**Deployment**

Product was deployed on vercel.


**LightHouse Report**

<img width="959" alt="Screenshot 2024-08-02 082420" src="https://github.com/user-attachments/assets/97a55c26-8ca6-4603-87e4-d9eeeeb865d0">



**Conclusion**
This project is open for collaboration. I will be releasing guidelines on how to collaborate on this project.










