import { useState } from "react"

export default function ToggleButton(props) {

    const [isToggled, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!isToggled)
    }

    return (
        <div>
            <button
                className="toggle-switch"
                onClick={handleClick}
            >
                {isToggled ? (
                    "Hide Details"
                ) : (
                    "Read more details"
                )}
            </button>
            {
                isToggled ? (
                    props.asList ? 
                        (
                            props.data.map((point) => {
                                return (
                                    <li
                                        key={point}
                                        className="card-description"
                                    >
                                        {point}
                                    </li>
                                )
                            })
                        ) : (
                            <div className="card-description">
                                {props.data}
                            </div>
                        )
                    ) : (<></>)
            }
    </div>
    )
}