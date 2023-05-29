import { useEffect, useState } from "react";

function SmallCards(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < props.counter) {
            setTimeout(() => {
                setCount(count + 1);
            }, 15);
        }
    });

    return (
        <div className="card" key={props.id}>
            <div className="card-inner">
                <div className="icon">
                    <img src={props.icon} alt={props.text} />
                </div>
                <div className="text-counter">
                    <div className="counter">
                        {/* {props.counter} */}
                        {count}
                        <span>k</span>
                    </div>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    );
}
export default SmallCards;