import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* The following line within link tags to be used if you want to use google Icons */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>  
        {/* The following line within link tags to be used if you want to use bootstrap icons */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='class1'>This has been added</h1>
        <p id='id1'>line 1</p>
        <p className='class2' >line 2</p>

        {/*Google Icons are used below */}
        <i class="material-icons">cloud</i>
        <i class="material-icons">favorite</i>
        <i class="material-icons">attachment</i>
        {/*Bootstrap Icons are used below */}
        <i class="glyphicon glyphicon-cloud"></i>
        <i class="glyphicon glyphicon-remove"></i>
        <i class="glyphicon glyphicon-user"></i>
        <i class="glyphicon glyphicon-envelope"></i>
        <i class="glyphicon glyphicon-thumbs-up"></i>
        <a className='linkEg' href="default.asp" target="_blank">This is a link</a> 

        <p id='id3'>line 3</p>
        <p id='id4'>line 4</p>
        <p id='id5'>line 5</p>

        <p>Example of unordered lists:</p>
        <ul class="a">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ul>
        <ul class="b">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ul>
        <p>Example of ordered lists:</p>
        <ol class="c">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>
        <ol class="d">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>


        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React
        </a>
        <p></p>
      </header>
    </div>
  );
}

export default App;
