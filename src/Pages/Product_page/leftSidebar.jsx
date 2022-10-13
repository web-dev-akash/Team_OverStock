import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox
} from '@chakra-ui/react'

const LeftSidebar = () => {
    return (
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                                Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left">
                        <Checkbox colorScheme='red' >
                            Checkbox
                        </Checkbox>
                        <br />
                        <br />
                        <Checkbox colorScheme='red'>
                            Checkbox
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red' >
                            Checkbox
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red'>
                            Checkbox
                        </Checkbox>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>

    )
}
const t = [1, 2, 3, 4, 5, 6, 7, 8]
export const LeftBars = () => {
    return (
        <Box>
            {
                t.map(() => <LeftSidebar key={Math.random()} />)
            }
        </Box>
    )
}
export default LeftBars;