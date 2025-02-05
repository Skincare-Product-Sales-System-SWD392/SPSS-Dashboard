import React from "react";
import { Minus, Plus } from "lucide-react";

interface CounterProps {
    initialValue?: number;
    decrementClass?: string;
    incrementClass?: string;
    className?: string;
    inputClass?: string;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0, decrementClass, incrementClass, className, inputClass }) => {

    const [count, setCount] = React.useState(initialValue);

    const handleIncrement = () => setCount(count + 1);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <React.Fragment>
            <div className={className}>
                <button
                    type="button"
                    className={decrementClass}
                    onClick={handleDecrement}
                >
                    <Minus className="inline-block size-4"></Minus>
                </button>
                <input
                    type="number"
                    className={inputClass}
                    value={count}
                    min="0"
                    max="100"
                    readOnly
                />
                <button
                    type="button"
                    className={incrementClass}
                    onClick={handleIncrement}
                >
                    <Plus className="inline-block size-4"></Plus>
                </button>
            </div>
        </React.Fragment>

    )
};


export default Counter;