import React, { createContext, useState } from "react"

import {
  getAbout,
  getTeam,
  getTNC,
  getContact,
  getTestimonial,
  getHeroBanner,
  getProducts,
} from "./systemInfo"

export const SystemInfoApiData = createContext()

const SystemInfoApiDataProvider = (props) => {
  const [aboutList, setAboutList] = useState([])
  const [teamList, setTeamList] = useState([])
  const [tncList, setTncList] = useState([])
  const [contactList, setContactList] = useState([])
  const [testimonialList, setTestimonialList] = useState([])
  const [heroBannerList, setHeroBannerList] = useState([])
  const [productList, setProductList] = useState([])

  const processGetAbout = async (data) => {
    let response = await getAbout(data || 1)
    if (response) {
      setAboutList(response.data.data)
    }
  }

  const processGetTeam = async (data) => {
    let response = await getTeam(data || 1)
    if (response) {
      setTeamList(response.data.data)
    }
  }

  const processGetTnc = async (data) => {
    let response = await getTNC(data || 1)
    if (response) {
      setTncList(response.data.data)
    }
  }

  const processGetContact = async (data) => {
    let response = await getContact(data || 1)
    if (response) {
      setContactList(response.data.data)
    }
  }

  const processGetTestimonial = async (data) => {
    let response = await getTestimonial(data || 1)
    if (response) {
      setTestimonialList(response.data.data)
    }
  }

  const processGetHeroBanner = async (data) => {
    let response = await getHeroBanner(data || 1)
    if (response) {
      setHeroBannerList(response.data.data)
    }
  }

  const processGetProduct = async (data) => {
    let response = await getProducts(data || 1)
    if (response) {
      setProductList(response.data.data)
    }
  }

  return (
    <SystemInfoApiData.Provider
      value={{
        aboutList,
        teamList,
        tncList,
        contactList,
        testimonialList,
        heroBannerList,
        productList,
        processGetAbout,
        processGetTeam,
        processGetTnc,
        processGetContact,
        processGetTestimonial,
        processGetHeroBanner,
        processGetProduct,
      }}
    >
      {props.children}
    </SystemInfoApiData.Provider>
  )
}

export default SystemInfoApiDataProvider
