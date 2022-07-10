import { DataBase } from "./dataBase.js";

export const seteLocalStorage = () => {
    localStorage.setItem("DataBase", JSON.stringify(DataBase));
}

export const getLocalStorage = () => {
    const Data = localStorage.getItem("DataBase");
    return JSON.parse(Data);
}