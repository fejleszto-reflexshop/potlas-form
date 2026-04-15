import {useEffect} from "react";
import {getInfo} from "./getInfo.tsx";

export function SendData() {
    useEffect(() => {
        getInfo()
    }, []);

    const data = JSON.parse(localStorage.getItem("data") as string);

    useEffect(() => {
        const api_call = async() => {
            try {
                console.log(data)
            } catch (err) {
                console.error(err);
            }
        }

        api_call().then(r => console.log(r));
    }, []);

    return (
        <></>
    )
}