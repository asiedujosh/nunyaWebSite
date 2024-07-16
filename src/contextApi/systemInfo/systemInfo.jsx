import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/httpConstant"

//Get
export const getAbout = async () => {
  try {
    let responseOnGetAbout = await axios.get(`/api/getAbout`)
    if (responseOnGetAbout) {
      if (responseOnGetAbout.status === SUCCESS_STATUS) {
        return responseOnGetAbout.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getTeam = async () => {
  try {
    let responseOnGetTeam = await axios.get(`/api/getTeam`)
    if (responseOnGetTeam) {
      if (responseOnGetTeam.status === SUCCESS_STATUS) {
        return responseOnGetTeam.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getTNC = async () => {
  try {
    let responseOnGetTnc = await axios.get(`/api/getTNC`)
    if (responseOnGetTnc) {
      if (responseOnGetTnc.status === SUCCESS_STATUS) {
        return responseOnGetTnc.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getContact = async () => {
  try {
    let responseOnGetContact = await axios.get(`/api/getContact`)
    if (responseOnGetContact) {
      if (responseOnGetContact.status === SUCCESS_STATUS) {
        return responseOnGetContact.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getTestimonial = async () => {
  try {
    let responseOnGetTestimonial = await axios.get(`/api/getTestimonial`)
    if (responseOnGetTestimonial) {
      if (responseOnGetTestimonial.status === SUCCESS_STATUS) {
        return responseOnGetTestimonial.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getHeroBanner = async () => {
  try {
    let responseOnGetHeroBanner = await axios.get(`/api/getHeroBanner`)
    if (responseOnGetHeroBanner) {
      if (responseOnGetHeroBanner.status === SUCCESS_STATUS) {
        return responseOnGetHeroBanner.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getProducts = async () => {
  try {
    let responseOnGetProducts = await axios.get(`/api/getProducts`)
    if (responseOnGetProducts) {
      if (responseOnGetProducts.status === SUCCESS_STATUS) {
        return responseOnGetProducts.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
