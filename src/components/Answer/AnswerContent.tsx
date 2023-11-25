
import "./AnswerContent.scss"
import {useEffect, useState} from "react";
import {AnswerText} from "./AnswerText";
import {parseDataFromServer} from "../../api/downloader";
import {RetryBtn} from "./RetryBtn";
export function AnswerContent({value}: {value: number|null}){
    const [downloadedValue, setDownloadedValue] = useState<string|null>("");
    const [isError, setIsError] = useState<boolean>(false);
    useEffect(loadData, [value]);

    return (
        <div className="answer">
            <AnswerText value={downloadedValue} isError={isError}/>
            {
                isError && <RetryBtn onClick={loadData} />
            }
        </div>
    );

    function loadData(){
        if(value) {
            setDownloadedValue(null);
            setIsError(false);
            parseDataFromServer(value)
                .then(setDownloadedValue)
                .catch((e: any) => {
                    // Request aborted because new sent
                    if(e?.name === 'AbortError') return;
                    setIsError(true);
                    console.error(e);
                })
        }
        else setDownloadedValue("")
    }
}