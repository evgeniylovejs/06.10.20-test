import React, { useState } from 'react';
// Convert the below stateful React component to using hooks.

interface Props {}

const ArrowFunctionComponent = (props: Props) => {
    const [lastClicked, setLastClicked] = useState<Date | undefined>(undefined);
    const [buttonColor, setButtonColor] = useState<"red" | "blue" | "green">(
        "red"
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setLastClicked(new Date());
        setButtonColor((prev) => {
            switch (prev) {
                case "red":
                    return "blue";
                case "blue":
                    return "green";
                case "green":
                    return "red";
                default:
                    throw new Error("Invalid color");
            }
        });
    };

    return (
        <div>
            <button
                onClick={handleClick}
                style={{ backgroundColor: buttonColor }}
            >
                Click
            </button>
            <p>
                Last clicked:{" "}
                {lastClicked !== undefined ? lastClicked.toString() : "Never"}
            </p>
        </div>
    );
};