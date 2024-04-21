import './App.css'

import caseLawLogo from './assets/caselawlogo.svg'


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is a simple app that allows you to search for case law by keyword.</p>
        </div>
    )
}

/*const Header = () => {
    return (
        <div>
            <h1>Case Law Search</h1>
        </div>
    )
}

const Nav = () => {
    return (
        <div>
            <h1>Nav</h1>
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>Search</li>
            </ul>
        </div>
    )
}*/

const test = About()
console.log(test)

function App() {

    return (
        <>
            <div style={{backgroundColor: "white"}}>
                <img src={caseLawLogo} width={500} className="react-logo" alt="logo"/>
                {/*<Nav/>*/}
                {/*<Header/>*/}
                {/*<About></About>*/}
            </div>
        </>
    )
}

export default App
