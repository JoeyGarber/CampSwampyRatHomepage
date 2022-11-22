export default function Homepage () {
  return (
    <div className='homepage'>
      <h1 className='title'>Leaf Scouts Troop #001 Present:</h1>
      <img src={require('../../pictures/sexyrat.JPG')} className='swamprat' width='500' height='600' />
      <h3 className='subheading'>Coordinated by Cara Satullo and Alison Thomas</h3>
    </div>
  )
}