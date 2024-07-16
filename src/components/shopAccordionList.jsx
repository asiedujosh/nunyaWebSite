import { useState, useContext, useEffect } from "react"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import SignBtn from "../components/signBtn"

const AccordionList = ({ data, purchase }) => {
  const { subjectList } = useContext(QuestionApiData)
  const { cart, setCart, store, setStore, itemsOnSale, setItemsOnSale } =
    useContext(StoreApiData)

  const addToCart = (id) => {
    //Add to cart
    let chosenSubject = itemsOnSale.filter((item) => item.id == id)
    setCart([...cart, chosenSubject[0]])
    //Remove from store
    let remainingSubjects =
      itemsOnSale && itemsOnSale.filter((item) => item.id !== id)
    setItemsOnSale([...remainingSubjects])
  }

  let List = data.map((item) => (
    <div key={item.id} className="">
      <div>
        <span>
          {subjectList.filter((item2) => item2.id == item.subjectId)[0].subject}
        </span>
      </div>
    </div>
  ))
  return List
}

export default AccordionList
