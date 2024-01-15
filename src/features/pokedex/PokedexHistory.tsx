import { MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { pokedexSearch, selectHistory } from "./pokedexSlice";
import { Accordion, AccordionPanel, Box, Button } from "grommet";

export function PokedexHistory(){
    const history = useAppSelector(selectHistory);
    const dispatch = useAppDispatch();
    function handleSearch(event: MouseEvent<HTMLSpanElement>, name: string){
        event.preventDefault();
        dispatch(pokedexSearch(name.toLowerCase()));
    }

    const historyMap = history.map((name, idx)=> {
        return (
            <Button 
                color='black' 
                hoverIndicator 
                secondary
                key={idx} 
                size="small"
                margin={{left: "medium", top: "small"}} 
                onClick={(e)=>handleSearch(e, name)}
            >
                {name.toUpperCase()}
            </Button>
        )
    });

    return (
        <Box width="medium">   
            <Accordion>
                <AccordionPanel label="Search History">
                    <Box background="white">   
                        {historyMap}
                    </Box>
                </AccordionPanel>
            </Accordion>
        </Box>
    )
}