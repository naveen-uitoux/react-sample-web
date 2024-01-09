export const coreConceptsList = [
    {
        title:"Components",
        description:" The core UI building block"
        /* 
        Creating the seperate file to give the data and that will be called in the main file
        We can use these 3 methods to call the details of the props.
        image can be stored in one file we can import the file name in this file and get the image in the same way*/
    },
    {
        title:"props",
        description:" This coreconcept methods can be used in 3 different ways.callig the finction by <core_concept[0].title.for this refer the code"
       /* Method 1
       <CoreConcepts 
        title= {Core_Concepts[0].title}
        description ={Core_Concepts[0].description} />*/
    },
    {
        title:"jsx",
        description:" In this we can use Rest/ Spread operator <CoreConcept {...Core_Concepts[0]}/>"
    /* We can use this method to optimise the code
       Method 2
      <CoreConcepts {...Core_Concepts[0]} />
      <CoreConcepts {...Core_Concepts[1]} />
      <CoreConcepts {...Core_Concepts[2]} />
      <CoreConcepts {...Core_Concepts[3]} />*/
    },
    {
        title:"State",
        description:" This is the another method (Destructuring method) to call the component "
    /*function CoreConcepts({title, description}){
  return(
    <li>
    <h3>{title}</h3>
    <p>{description}</p>
    </li>
  )*/
    }
]

/**Giving the example details to optiize the code and give it in the o/p
 * 
 */
export const EXAMPLES = {
   Component:{
      Title:'Header component and check the app() to call the <Header /> component',
      Description: 'Check the each and every step of changes of import this file in another component use the export &import option',
      },
    JSX:{
      Title:'Passing custom Arguments as Events',
      Description: 'Pass the arrow function in the menu  <TabButton onSelect={()=> handleClick("Component")}>"Component"</TabButton>',
      },
    Props:{
      Title:'Clicking Event and get the o/p in the screen//Passing function as values',
      Description: 'create a new function inside the app.jsx component and modify the examples section<TabButton onSelect={handleClick}>"Component"</TabButton> ',
      },
    State:{
        Title:'Managing state and using HOOKS',
        Description: 'Import the hooks i react project - import {useState} from "react";'
     }
}
  