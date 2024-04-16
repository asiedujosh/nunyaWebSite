import { useState, useContext, useEffect } from "react"
import SignBtn from "../components/signBtn"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import CartList from "../components/cartList"
import MakePaymentBtn from "../paymentGateway/paystackView"

const Cart = () => {
  const { examsList } = useContext(QuestionApiData)
  const { setStore, store, cart, setCart, purchaseStatus, setPurchaseStatus } =
    useContext(StoreApiData)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    let total = 0
    if (cart.length > 0) {
      total = cart.reduce(
        (acc, item) => item && parseInt(acc) + parseInt(item.price),
        0
      )
    }
    setTotalAmount(total)
  }, [cart])

  useEffect(() => {
    purchaseStatus && navigation.navigate("purchaseCongrats")
  }, [purchaseStatus])

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex justify-between w-full items-center">
              <h2 className="text-3xl">Cart</h2>
              <h2 className="text-3xl">Total GHS {totalAmount}</h2>
              {/* <SignBtn btnText={"Make Payments"} /> */}
              <MakePaymentBtn data={{ premium: false, amount: totalAmount }} />
            </div>
          </div>
          <div>
            {cart.map((item) => (
              <div>
                <CartList data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
