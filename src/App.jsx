import Card from './components/Card'

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <Card 
            imageUrl="https://via.placeholder.com/318x180?text=Изображение" 
            title="Название карточки"
          >
            <p className="card-text">Небольшой пример текста, который дополняет заголовок карточки и составляет основную часть её содержания.</p>
            <a href="#" className="btn btn-primary mt-auto">Пойти куда-нибудь</a>
          </Card>
        </div>
        
        <div className="col-md-6 mb-4">
          <Card 
            title="Дополнительные возможности"
          >
            <p className="card-text">С пояснительным текстом внизу в качестве естественного перехода к дополнительному контенту.</p>
            <a href="#" className="btn btn-primary mt-auto">Пойти куда-нибудь</a>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App