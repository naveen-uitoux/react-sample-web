import {useState, Fragment} from 'react';
import { coreConceptsList, EXAMPLES } from "./data.js";
import './App.css'
import Header from './Components/Header.jsx'
import CoreConcepts from "./Components/CoreConcepts.jsx";
import TabButton from "./Components/TabButton.jsx";


//Header component and check the app() to call the <Header /> component

/* Props concept
this props will be the object
if we use props on the function -- Give the tags with <h1>props.title</h1> 
this method can be given to all tags when props is used.(props - name can be given as our need
function CoreConcepts(props - remove this props and we the objects {}){
  return(
    <li>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
  ) we can alo use this method
}*/


/*For section 2, in menu list, create a new component in seperate file
Instead of repeating saem with several data
<li><button></button></li></menu>
<li><button></button></li></menu>
method 1: basic method -- <button>Component</button> // will give the same output
method 2 In this we can give the components as --> <TabButton>Components</TabButton> by using "children" and "props"
method 3 wecan use label method  --><TabButton label="Components" />*/


/*Clicking Event and get the o/p in the screen//Passing function as values


  - create a new function inside the app.jsx component and modify the examples section
  <TabButton onSelect={handleClick}>"Component"</TabButton> 
  
  - Give the new function in App.jsx and call the function in section(Check the above line)
     function handleClick(){
    console.log("Hello world - REACTJS")
}


  Program::
  function App() {

  function handleClick(){
    console.log("Hello world - REACTJS")
}
  return (
    <div>
    <Header /> 
      <main>
      <h2>Time to get started</h2>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul className="concept-list">
      <CoreConcepts 
        title= {coreConcepts[0].title}
        description ={coreConcepts[0].description} />
      <CoreConcepts {...coreConcepts[1]} />
      <CoreConcepts {...coreConcepts[2]} />
      <CoreConcepts {...coreConcepts[3]} />
      </ul>
      </section>
      <section id ="Examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={handleClick}>"Component"</TabButton>
          <TabButton onSelect={handleClick}>"JSX"</TabButton>
          <TabButton onSelect={handleClick}>"Props"</TabButton>
          <TabButton onSelect={handleClick}>"State"</TabButton>
          </menu>
        DYNAMIC CONTENT
      </section>
      </main>
    </div>
  );
}

export default App;
*/


/*Passing custom Arguments as Events
     -- Passing the arguments As  function handleClick(selectedButton) 
      -- Pass the arrow function in the menu  <TabButton onSelect={()=> handleClick('Component')}>"Component"</TabButton> 
      eg: <TabButton onSelect={()=> handleClick('Component')}>"Component"</TabButton> 
      - Here directly the handleClick won't be executed ,First it will check for the arrow function 
       ie,
       function handleClick(selectedButton){
    //selectedButton should be any 1 of this [ component, jsx, props, state]
    console.log(selectedButton)
        <menu>
          <TabButton onSelect={ ()=> handleClick('Component')}>"Component"</TabButton>
          <TabButton onSelect={()=> handleClick('JSX')}>"JSX"</TabButton>
          <TabButton onSelect={()=> handleClick('Props')}>"Props"</TabButton>
          <TabButton onSelect={()=> handleClick('State')}>"State"</TabButton>
          </menu>
     - After checking the the valus will be displayed based on the event selected.*/

     /* Giving the values as static
     - add the let statement and call this in main function
      eg:

      function App() {

  let tabContent="Give the input from the above list";
  
  function handleClick(selectedButton){
    //selectedButton should be any 1 of this [ component, jsx, props, state]
    tabContent =selectedButton;
    console.log(tabContent)
    ....

    <section id ="Examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={ ()=> handleClick('Component')}>"Component"</TabButton>
          <TabButton onSelect={()=> handleClick('JSX')}>"JSX"</TabButton>
          <TabButton onSelect={()=> handleClick('Props')}>"Props"</TabButton>
          <TabButton onSelect={()=> handleClick('State')}>"State"</TabButton>
          </menu>
        {tabContent}
      </section>
      */


      /** Managing state and using HOOKS - 
       - Import the hooks i react project - import {useState} from 'react';
       - call the useState() in main function(useState();)
       - useState shouldbe written as 
            const [selectedTopic, setSelectedTopic]= useState('Give the input from the above list');
         - selectedTopic-->Array and setSelectedTopic--> function(need to give the function using this second name)
       - Rules of useState 
         (i)

      - Code
         
         function App() {
       const [selectedTopic, setSelectedTopic]= useState('Give the input from the above list');
  //Here in code we are giving the state value
  
       function handleClick(selectedButton){
          //selectedButton should be any 1 of this [ component, jsx, props, state]
          setSelectedTopic(selectedButton); // Changing the calling function where the data to be displayed.
          console.log(selectedTopic)
          ...
          <TabButton onSelect={()=> handleClick('Props')}>"Props"</TabButton>
          <TabButton onSelect={()=> handleClick('State')}>"State"</TabButton>
          </menu>
        {selectedTopic} //This changes should be done on the screen then only we will get the data
      </section>
       */


      /**Derving the proper o/p for the elements
       * Refer this line const [selectedTopic, setSelectedTopic]= useState(); -useState should be empty
          ....
       *  {!selectedTopic&& <p>Please select the value</p>} -- Showing this content in default and after selecting the title this should be changed
          {selectedTopic && 
            <div id="tab-content">
              <p>{EXAMPLES[selectedTopic].Title}</p>
              <p>{EXAMPLES[selectedTopic].Description}</p>
            </div>
          }
      */
  

      /* *when selecting the button that should be highlighted by using this 2 steps

      step1:Instering his content in app.jsx
          ---isSelected ={selectedTopic === "Component"}
              <TabButton isSelected ={selectedTopic === "Component"} onSelect={ ()=> handleClick('Component')}>Component</TabButton>
             <TabButton isSelected ={selectedTopic === "JSX"} onSelect={()=> handleClick('JSX')}>JSX</TabButton>
      step2:
       */
      
function App() {
  const [selectedTopic, setSelectedTopic]= useState('Component');
  
  
  function handleClick(selectedButton){
    //selectedButton should be any 1 of this [ component, jsx, props, state]
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)

  }
  return (
    <>
    <Header /> 
      <main>
      <h2>Time to get started</h2>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul className="concept-list">
        {coreConceptsList.map((data, i)=> (
          <CoreConcepts title={data.title} description={data.description} key={i} />
        ))}
      </ul>
      </section>
      <section id ="Examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected ={selectedTopic === "Component"} onSelect={ ()=> handleClick('Component')}>Component</TabButton>
            <TabButton isSelected ={selectedTopic === "JSX"} onSelect={()=> handleClick('JSX')}>JSX</TabButton>
            <TabButton isSelected ={selectedTopic === "Props"} onSelect={()=> handleClick('Props')}>Props</TabButton>
            <TabButton isSelected ={selectedTopic === "State"} onSelect={()=> handleClick('State')}>State</TabButton>
          </menu>
          {selectedTopic ?  (
            <div id="tab-content">
              <p>{EXAMPLES[selectedTopic].Title}</p>
              <p>{EXAMPLES[selectedTopic].Description}</p>
            </div>
          ): (
            <p>Please select the Title</p>
          )}
          
      </section>
      </main>
    </>
  );
}

export default App;
