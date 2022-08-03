import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Alucard']);

  const onAddCategory = ( newCategory ) => {
    setCategories( [...categories, newCategory ])
  }

  return(
    <>
      <AddCategory onAddCategory={ onAddCategory } />

      <h1>GifExprtApp</h1>
      { categories.map(category =>(
            <GifGrid key={ category } category={ category }/>
          )
        )
      }
    </>
  )
}