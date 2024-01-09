/* 

Both method gives the same output
  Method 1
export default function TabButton(props)
This props will give the below format to pull the text
<button>{props.children}</button>

App.jsx - section 
<menu>
<TabButton>Components</TabButton>
</menu>
Method 2 

export default function TabButton({children}){
    return(
        <li>
        <button>{children}</button>
        </li>
        );
App.jsx - section 
<menu>
<TabButton>Components</TabButton>
</menu>

Method 3 
 export default function TabButton({label}){
    return(
        <li>
        <button>{label}</button>
        </li>
        );
} 
App.jsx - section 
<menu>
<TabButton label="Components" />
</menu>

*/

/* EVent function - Click on the button and get the data

document.querySelector('button').addEventListener('Click',()=>{})  ---> this is used in vennila JS 

In React JS we can use onClick function - advance method
      - <button onClick ={handleClick}>{label}</button> or  <button onClick ={handleClick}>{children}</button>
      - To use the Onclick function, we need to write the seperate function
        For example
             function handleClick(){
        console.log("Hello world")
    }
    return(
        <li>
        <button onClick ={handleClick}>{label}</button>
        </li>
        );*/

/*To give the Dynamic value for the examples//Passing function as values,

  - we can use the Onclick on the each and every examples with the help of new function (onSelect)
- export default function TabButton({children,onSelect})
- WE ARE REMOVING THE FUNCTION and giving this in App component
    {
    function handleClick(){
        console.log("Hello world")
    }
 - This is the exact function
 
 export default function TabButton({children, onSelect}){
    return(
        <li>
        <button onClick ={onSelect}>{children}</button>
        </li>
        ); */


        /*Passing custom Arguments as Events and highlight the content when selected

        export default function TabButton({children, onSelect, isSelected}){
    return(
        <li>
        <button className={isSelected ? "active" : undefined} onClick ={onSelect}>{children}</button>
        </li>
        );
}
         */


export default function TabButton({children, onSelect, isSelected}){
    return(
        <li>
        <button className={isSelected ? "active" : undefined} onClick ={onSelect}>{children}</button>
        </li>
        );
}