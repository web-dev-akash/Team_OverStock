import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox
} from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { SortContext } from '../../Components/Cotext'
import { getFurniture, getFurnitureDataFilter, getFurnitureDataWithParams, getLoading } from '../../redux/action'




export const LeftBars = ({order_set,changeOrder}) => {
    const { order_new} = useContext(SortContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [filterDataCat, setfilterDataCat] = useState(searchParams.getAll("category") || []);
    const [filterDataBrand, setfilterDataBrand] = useState(searchParams.getAll("brands") || []);

    const filterCat = (e) => {
        let isChecked = e.target.checked;
        if(isChecked)
        setfilterDataCat([...filterDataCat,e.target.value]);
        else {
            let afterfilterDataCat = filterDataCat.filter((elm)=> elm!=e.target.value)
            setfilterDataCat(afterfilterDataCat);
        }
    }

    const filterBrand = (e) => {
        let isChecked = e.target.checked;
        if(isChecked)
        setfilterDataBrand([...filterDataBrand,e.target.value]);
        else {
            let afterfilterDataBrand = filterDataBrand.filter((elm)=> elm!=e.target.value)
            setfilterDataBrand(afterfilterDataBrand);
        }
    }
    useEffect(()=>{
        const obj = {};
        if(filterDataBrand.length && filterDataCat.length) {
            if(order_set !=""){
                obj.order = order_set;
                obj.sort = "price"
            }
            obj.category = filterDataCat;
            obj.brands= filterDataBrand
        }
        else if(filterDataBrand.length==0){
            if(order_set !=""){
                obj.order = order_set;
                obj.sort = "price"
            }
            obj.category = filterDataCat;
        }
        else if(filterDataCat.length==0){
            if(order_set !=""){
                obj.order = order_set;
                obj.sort = "price"
            }
            obj.brands= filterDataBrand
        }   

        setSearchParams(obj);
    },[filterDataCat,filterDataBrand])


    useEffect(()=>{
        dispatch(getLoading())
        if(filterDataBrand.length && filterDataCat.length){
            if(order_set !="") {
                getFurnitureDataFilter(filterDataCat,filterDataBrand,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
            }else {
                getFurnitureDataFilter(filterDataCat,filterDataBrand,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
            }
        }
        else if(filterDataBrand.length==0)
            if(order_set !="") {
                getFurnitureDataFilter(filterDataCat,undefined,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
            }else {
                getFurnitureDataFilter(filterDataCat,undefined,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
            }
        else if(filterDataCat.length==0) {
            if(order_set !="") {
                getFurnitureDataFilter(undefined,filterDataBrand,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
            }else {
                getFurnitureDataFilter(undefined,filterDataBrand,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
            }
        }
    },[filterDataCat,filterDataBrand])

    useEffect(()=>{
        dispatch(getLoading())
        if(filterDataBrand.length && filterDataCat.length){
            if(order_set !="") {
                getFurnitureDataFilter(filterDataCat,filterDataBrand,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
            }else {
                getFurnitureDataFilter(filterDataCat,filterDataBrand,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
            }
        }
        else if(filterDataBrand.length==0)
            if(order_set !="") {
                getFurnitureDataFilter(filterDataCat,undefined,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
            }else {
                getFurnitureDataFilter(filterDataCat,undefined,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
            }
        else if(filterDataCat.length==0) {
            if(order_set !="") {
                getFurnitureDataFilter(undefined,filterDataBrand,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
            }else {
                getFurnitureDataFilter(undefined,filterDataBrand,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
            }
        }
    },[])

    // const checking = (e) => {
    //     console.log(e.target.value);
    //     filterDataBrand.map((elm)=>{
    //         if(elm==e.target.value){
    //             e.target.checked = true;
    //         }})
    //     filterDataCat.map((elm)=>{
    //         if(elm==e.target.value){
    //             e.target.checked = true;
    //         }})
    // }

    return (
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                            Categories
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left">
                        <Checkbox colorScheme='red' value="furniture" onChange={filterCat}>
                            Furniture
                        </Checkbox>
                        <br />
                        <br />
                        <Checkbox colorScheme='red' value="rugs" onChange={filterCat}>
                            Rugs
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red' value="bedding" onChange={filterCat}>
                            Beds
                        </Checkbox>
                        <br /><br />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                            Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left">
                        <Checkbox colorScheme='red' value="Everbilt" onChange={filterBrand} >
                        Everbilt
                        </Checkbox>
                        <br />
                        <br />
                        <Checkbox colorScheme='red'value="Home Decorators Collection" onChange={filterBrand}>
                        Home Decorators Collection
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red' value="Artistic Weavers" onChange={filterBrand}>
                        Artistic Weavers
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red'value="Foss" onChange={filterBrand}>
                        Foss
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red' value="nuLOOM" onChange={filterBrand}>
                        nuLOOM
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red' value="3M" onChange={filterBrand}>
                        3M
                        </Checkbox>
                        <br /><br />
                        <Checkbox colorScheme='red' value="TrafficMaster" onChange={filterBrand}>
                        TrafficMaster
                        </Checkbox>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                            Brands
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
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                            Customer Ratings
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
export default LeftBars;