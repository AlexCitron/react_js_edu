export default function Instructions({state}) {
    return (
        <div className={`app-instructions${state}`}>
            <h2>How to Use</h2>
            <p>To use these components in your project:</p>
            <p>     1. Import the component: import Button from './Button';</p>
            <p>     2. Customize the component using the following props:</p>

            <table>
                <tbody>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>

                    <tr>
                        <td>children</td>
                        <td>node</td>
                        <td>required</td>
                        <td>Content displayed inside the button (text, icons, etc.).</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>string</td>
                        <td>"medium"</td>
                        <td>Size of the button: "small", "medium" or "large".</td>
                    </tr>
                    <tr>
                        <td>variant</td>
                        <td>string</td>
                        <td>"primary"</td>
                        <td>Style of the button: "primary", "secondary", "danger", "outline" or "gradient".</td>
                    </tr>
                    <tr>
                        <td>isDisabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Disables the button if set to true.</td>
                    </tr>
                    <tr>
                        <td>fullWidth</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Makes the button stretch to fill its container if set to true.</td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>function</td>
                        <td>null</td>
                        <td>Callback function triggered on when the button is clicked.</td>
                    </tr>
                </tbody>
            </table>
            <p>{`Example of usage: <Button size="large" variant="gradient">Click Me</Button>`}</p>
        </div>
    )
}