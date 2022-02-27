import React from "react";

function Button({label,fun}) {
    return <button onClick={fun} class="btn btn-primary"> {label} </button>
}

export default Button;