const reactDescriptions=["Fundamental","Crucial"];

function changeData(max){
  return Math.floor(Math.random()* (max + 1));
}
  //Header component and check the app() to call the <Header /> component

  //To import this file in another component use the export &import option
  //export default function Header()
  // import Header from './Components/Header.jsx' in App.jsx file

export default function Header() {
    const changeDesc = reactDescriptions[changeData(1)];
    return(
    <header>
      <h1>React Essentials</h1>
      <p>{changeDesc} react concepts to know and get expertize </p>
    </header>
    );
  }