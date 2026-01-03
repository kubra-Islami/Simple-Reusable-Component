import React from "react";
function Badge({ label, value, variant = "default" }) {
    return (
        <div className="badge">
            {label && <span className="badge-label">{label}</span>}
            <span className={`badge-value badge-${variant}`}>
                 {value}
           </span>
        </div>
    );
}

export default Badge;
