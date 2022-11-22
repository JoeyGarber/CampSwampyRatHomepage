export default function Badges () {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className='center'>
        <div className='badges'>
          <h1 className='title'>Badges</h1>
          <h3 className='subheading-badge'>The Nature Badge</h3>
          <span class="material-symbols-outlined">park</span>
          <ol>
            <li>Touch grass</li>
            <li>Crunch a crunchy leaf</li>
            <li>Share a wilderness survival tip with the group</li>
            <li>Contemplate human nature</li>
          </ol>
          <h3 className='subheading-badge'>The Friendship Badge</h3>
          <span class="friendship material-symbols-outlined">sentiment_satisfied</span>
          <p>Scouts must complete <strong>3</strong> of the following activities:</p>
          <ol>
            <li>Write a poem about a fellow scout</li>
            <li>Make a friendship bracelet</li>
            <li>Come up with a cool nickname for everybody in the group</li>
            <li>Create a special handshake with one of your fellow scouts</li>
            <li>Share your greatest fear with the group</li>
          </ol>
          <h3 className='subheading-badge'>The Botany Badge</h3>
          <span class="material-symbols-outlined">local_florist</span>
          <ol>
            <li>Identify a plant</li>
            <li>Eat a fruit or vegetable</li>
            <li>Draw a picture of a plant</li>
            <li>Name your favorite part of the plant cell</li>
          </ol>
          <h3 className='subheading-badge'>The Ally Badge</h3>
          <span class="material-symbols-outlined">looks</span>
          <ol>
            <li>Give a queer person a snack</li>
            <li>Use a gay slang term correctly in a sentence</li>
            <li>Identify the queer subtext or queer-coded characters in a popular film</li>
            <li>Share your thoughts on the Gaylor theory</li>
          </ol>
        </div>
      </div>
    </>
  )
}