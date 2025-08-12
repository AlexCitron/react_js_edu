import Header from "./components/header.jsx";
import Variants from "./components/variants.jsx";
import Sizes from "./components/sizes.jsx";
import ButtonStates from "./components/button.states.jsx";

const downloadButtonFile = () => {
    const code = `
        import React from "react";
        import PropTypes from "prop-types";
        import "./index.css";

        function Button({
            children,
            size = "medium",
            variant = "primary",
            isDisabled = false,
            onClick,
            fullWidth = false,
            }) {
            return (
                <button
                    className={\`button \${size} \${variant} \${fullWidth ? "full-width" : ""}
                    onClick={onClick}
                    disabled={isDisabled}\`}
                >
                {children}
                </button>
                );
            }

    Button.propTypes = {
            children: PropTypes.node.isRequired,
            size: PropTypes.oneOf(["small", "medium", "large"]),
            variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline", "gradient"]),
            isDisabled: PropTypes.bool,
            onClick: PropTypes.func,
            fullWidth: PropTypes.bool,
        };

    export default Button;
`
    const blob = new Blob([code], {type: "text/javascript"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Button.js";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function App() {

  return (
    <div className={'app'}>
        <Header />
            <div className={'component-showcase'}>
                <Variants />
                <Sizes />
                <ButtonStates />
            </div>
    </div>
  )
}
