import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Account</h1>
        <form>
          Username:<br/>
          <input type="text" placeholder="Username"></input>
          <br/>Password:<br/>
          <input type="password" placeholder="Password"></input>
          <br/>
          <input type="submit" value="Sign Up"></input>
        </form>
        <h1>Log In</h1>
        <form>
          Username:<br/>
          <input type="text" placeholder="Username"></input>
          <br/>Password:<br/>
          <input type="password" placeholder="Password"></input>
          <br/>
          <input type="submit" value="Log In"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
