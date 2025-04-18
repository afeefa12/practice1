import React from "react";

const fetchData = ({items}) => {
    return(
        <div>
            {items.map((item) => (
                <div key = {item.id}>
                <h3>{item.name}</h3>
                <p>{item.email}</p>
            </div>
            ))}
        </div>
    );
};
export default fetchData;