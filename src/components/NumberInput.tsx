import {NumericFormat} from "react-number-format";
import {TextField} from "@mui/material";
import "./NumberInput.scss"

export function NumberInput({onChange}: {onChange: (value: number|null)=>any}){
    const materialUITextFieldProps = {
        label: "Amount",
        multiline: true,
        maxRows: 4,
        variant: "filled",
    };

    return (
        <NumericFormat
            prefix="$"
            onValueChange={value=>void onChange(value.floatValue??null)}
            placeholder="Enter the amount in $"
            allowedDecimalSeparators={['.']}
            decimalSeparator=","
            thousandSeparator=" "
            max={999_999_999_999}
            decimalScale={2}
            id="number-input"
            customInput={TextField}
            maxRows={4}
            {...(materialUITextFieldProps as any)}
        />
    )
}