import { useState, useContext, useEffect } from "react"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import AccordionList from "./accordionList"
import Accordion from "./Accordion"
import AccordionItem from "./accordionItem"
import AccordionItemButton from "./accordionItemButton"
import AccordionItemHeading from "./accordionItemHeading"
import AccordionItemPanel from "./accordionItemPanel"

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css"

const MainStore = () => {
  const { examsList, yearList } = useContext(QuestionApiData)
  const { processGetStoreInfo, store, cart, itemsOnSale } =
    useContext(StoreApiData)
  useEffect(() => {
    processGetStoreInfo()
  }, [])

  return (
    <div>
      {examsList.map((item) => (
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{item.exam}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <AccordionList
                data={
                  itemsOnSale &&
                  itemsOnSale.filter((item2) => item2.examId == item.id)
                }
              />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}

export default MainStore
