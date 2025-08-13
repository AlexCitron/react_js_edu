import PropTypes from "prop-types"

export default function Button ({
                                    icon,
                                    size = "medium",
                                    variant = "primary",
                                    fullWidth = false,
                                    isDisabled = false,
                                    onClick,
                                    children,
                                }) {
    return (
        <button
            className={`button ${variant} ${size} ${isDisabled ? 'disabled' : ''} ${fullWidth ? 'full-width' : ""}`.trim()}
            onClick={onClick}
        >
            {icon && <span>{icon}</span>}
            {children}
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'gradient', 'outline']),
    fullWidth: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
}