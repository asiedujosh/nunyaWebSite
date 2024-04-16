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

const MainFree = () => {
  const { examsList, yearList } = useContext(QuestionApiData)
  const { freeProducts } = useContext(StoreApiData)

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
                          freeProducts &&
                          freeProducts.filter(
                            (item2) => item2.examId == item.id
                          )
                        }
                        purchase={true}
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

export default MainFree
