import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <Card 
            imageUrl="https://via.placeholder.com/318x180?text=Image+cap" 
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Go somewhere"
          />
        </div>
        
        <div className="col-md-6 mb-4">
          <Card 
            title="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content."
            buttonText="Go somewhere"
          />
        </div>
      </div>
    </div>
  )
}

export default App