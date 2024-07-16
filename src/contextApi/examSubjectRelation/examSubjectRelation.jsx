import { URL, TIMEOUT, SUCCESS_STATUS } from "../../constants/httpConstant"
import axios from "axios"

export const getAllExamSubjectLink = async () => {
  try {
    let responseOnGetAllExamSubject = await axios.get(
      `${URL}/api/mobileGetAllLinkedExamSubject`
    )
    if (responseOnGetAllExamSubject) {
      if (responseOnGetAllExamSubject.status === SUCCESS_STATUS) {
        return responseOnGetAllExamSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
