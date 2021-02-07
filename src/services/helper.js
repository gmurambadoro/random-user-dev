import {getName} from "country-list";

/**
 * Retrieves the country's full name
 * @param code The country code
 */
export const getCountryName = (code) => getName(code);
