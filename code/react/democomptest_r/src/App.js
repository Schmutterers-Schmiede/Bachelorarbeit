import logo from './logo.svg';
import './App.css';
import React, { useEffect} from "react";

function App() {
  useEffect(() => {
    document.title = "Demo Components React";  
  }, []);
  return (
    <div className="App">
      <my-mover></my-mover>
      <my-propbinding input="Text from property"></my-propbinding>
      <my-event-emitter></my-event-emitter>
      <my-event-listener></my-event-listener>
    </div>
  );
}

export default App;
