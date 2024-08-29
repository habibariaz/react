import './App.css';
import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("#a9dfbf")
  return (
    <>
      <div class='div' style={{ backgroundColor: color }}>
        <div class="p-3 mb-2 text-white text-center" id="footer">
          <button type="button" class="btn btn-primary" onClick={() => { setcolor("#1976D2") }}>Primary</button>
          <button type="button" class="btn btn-secondary" onClick={() => { setcolor("#424242") }}>Secondary</button>
          <button type="button" class="btn btn-success" onClick={() => { setcolor("#4CAF50") }}>Success</button>
          <button type="button" class="btn btn-danger" onClick={() => { setcolor("#e74c3c") }}>Danger</button>
          <button type="button" class="btn btn-warning" onClick={() => { setcolor("#FFC107") }}>Warning</button>
          <button type="button" class="btn btn-info" onClick={() => { setcolor("#2196F3") }}>Info</button>
          <button type="button" class="btn btn-light" onClick={() => { setcolor("#d5dbdb") }}>Light</button>
          <button type="button" class="btn btn-dark" onClick={() => { setcolor("#424242") }}>Dark</button>
        </div>
      </div>
    </>
  );
}

export default App;
