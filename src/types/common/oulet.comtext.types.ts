import {SearchTypes} from "./search.types";


export type OutletContextType = {
    searchTypes: SearchTypes;
    setTotalSize: (size: number) => void;
    searchTrigger: number;
};