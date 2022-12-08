import Directory from "./components/directory/Directory.component";

function App() {

  const categories = [
     {
      id: 1,
      title: 'Brass',
      imageUrl: 'https://cdn.shoplightspeed.com/shops/640430/files/34875515/wyld-blue-home-antique-raw-brass-bowl.jpg'
     },
     {
      id: 2,
      title: 'Silver',
      imageUrl: 'https://freepngimg.com/thumb/silver/28926-3-silver-transparent-image.png',
     },     {
      id: 3,
      title: 'Gold',
      imageUrl: 'https://freepngimg.com/thumb/money/70888-money-coin-coins-free-hq-image.png',
     },     {
      id: 4,
      title: 'Copper',
      imageUrl: ''
     },
     

  ]

  return <Directory categories={categories} />
}

export default App;
