import { useState, useContext, useEffect } from "react"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import SignBtn from "./signBtn"
import { QuestionApiData } from "../contextApi/question/questionContextApi"

const CartList = ({ data }) => {
  const { subjectList } = useContext(QuestionApiData)
  const { cart, setCart, itemsOnSale, setItemsOnSale } =
    useContext(StoreApiData)

  const removeFromCart = (id) => {
    let remainingSubjects = cart.filter((item) => item.id == id)
    setItemsOnSale([...itemsOnSale, remainingSubjects[0]])
    // //Add to cart
    let removeSubject = cart.filter((item) => item.id !== id)
    setCart(removeSubject)
    // //Remove from store
    // let addBack = store.filter(item => item.id == id);
    // setItemsOnSale([...itemsOnSale, addBack]);
  }

  return (
    <>
      {data ? (
        <div key={data.id}>
          <div className="flex w-full py-2 mb-4 bg-gray-100 justify-between">
            <span className="">
              {
                subjectList.filter((item2) => item2.id == data.subjectId)[0]
                  .subject
              }
            </span>
            <span>GHS {data.price}</span>
            <SignBtn
              btnText={"Remove"}
              action={() => {
                removeFromCart(data.id)
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <span>No Data</span>
        </div>
      )}
    </>
  )
}

export default CartList
