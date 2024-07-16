import axios from "axios"
import { URL, TIMEOUT, SUCCESS_STATUS } from "../../constants/httpConstant"

export const getMySubscription = async (data) => {
  try {
    let responseOnGetMySubscription = await axios.get(
      `${URL}/api/getMySubscription?userId=${data}`
    )
    if (responseOnGetMySubscription) {
      if (responseOnGetMySubscription.status === SUCCESS_STATUS) {
        return responseOnGetMySubscription.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
