import * as path from "path";
import {DIRNAME} from "../constants/Dirname.js";
import * as fs from "fs";
import process from "process";

export const deleteFiles = (files: string[]) => {
    files.forEach(item => {
        const filePath = path.join(DIRNAME, `public/${item}`);
        // Use fs.unlink to delete the file
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error deleting file ${item}:`, err);
            }
        });
    })
}