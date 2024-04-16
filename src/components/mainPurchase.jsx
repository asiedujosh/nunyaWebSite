import { useState, useContext } from "react"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import AccordionList from "./shopAccordionList"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const MainPurchase = () => {
  const { examsList, yearList } = useContext(QuestionApiData)
  const { purchases } = useContext(StoreApiData)

  return (
    <div>
      {examsList.map((item) => (
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{item.exam}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {yearList.map((item) => (
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{item.year}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <AccordionList
                        data={
                          purchases &&
                          purchases.filter((item2) => item2.examId == item.id)
                        }
                        purchases={true}
                      />
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}

export default MainPurchase
