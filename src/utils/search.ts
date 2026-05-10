import {SearchTypes} from "../types/common/search.types";
import {getInitialDateRange} from "./date";


export const setNewSearchType = (): SearchTypes => {
    const initialDates = getInitialDateRange(1);
    return {
        startDate : initialDates.startDate,
        endDate : initialDates.endDate,
        status : "",
        category: "",
        page : 1,
        size : 5
    }
};