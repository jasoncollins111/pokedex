import { MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { pokedexSearch, selectHistory } from "../slices/pokedexSlice";
import { Menu, Box } from "grommet";
import { clearMove } from "../slices/pokemonMoveSlice";
import { clearAbility } from "../slices/pokemonAbilitySlice";

export function PokedexHistory(){
    const history = useAppSelector(selectHistory);
    const dispatch = useAppDispatch();
    function handleSearch(event: MouseEvent<HTMLSpanElement>, name: string){
        event.preventDefault();
        dispatch(clearMove());
        dispatch(clearAbility());
        dispatch(pokedexSearch(name.toLowerCase()));
    }

    const historyMap = history.map((name, idx)=> {
        return {
            label: name.toUpperCase(),  
            onClick: (e: MouseEvent<HTMLSpanElement>)=>handleSearch(e, name)
        }
    });

    return (
        <Box width="small">   
            <Menu label="Search History" items={historyMap}/>
        </Box>
                    
    )
}