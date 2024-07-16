import { URL, TIMEOUT, SUCCESS_STATUS } from "../../constants/httpConstant"
import axios from "axios"

export const getAllPricing = async () => {
  try {
    let responseOnGetAllPricing = await axios.get(`${URL}/api/getAllPricing`)
    if (responseOnGetAllPricing.status === SUCCESS_STATUS) {
      return responseOnGetAllPricing.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
