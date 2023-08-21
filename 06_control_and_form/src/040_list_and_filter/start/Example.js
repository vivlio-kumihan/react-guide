import { useState } from "react"

const animals = ["髙廣信之", "髙廣和恵", "髙廣茉李", "髙廣稔之"]

const Example = () => {
  const [filterVal, stateFilterVal] = useState("")
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={ filterVal }
        onChange={ (e) => {
            stateFilterVal(e.target.value)
          }
        }
      />
      <ul>
        { animals
          .filter(animal => animal.indexOf(filterVal) !== -1)
          .map(animal => <li key={ animal }>{ animal }</li>) }
      </ul>
    </>
  )
}

export default Example
