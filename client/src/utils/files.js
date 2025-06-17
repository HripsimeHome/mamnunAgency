import { proxy } from "../store/tools/fetchTools.js";

export const setImagePath = (item) => `${proxy}/api${item}`;
// `${isProduction ? proxy : ""}/api${item}`;
