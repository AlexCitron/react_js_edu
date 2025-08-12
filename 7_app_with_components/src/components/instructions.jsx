export default function Instructions({state}) {
    return (
        <div className={`app-instructions${state}`}>
            <h3>How to Use</h3>
            <p>To use these components in your project:</p>
            <ol>
                <li>
                    Import the component: <code>{`import Button from './Button'`}</code>;
                </li>
                <li>Customize the component using the following props:</li>
            </ol>
            <table>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>children</code></td>
                        <td>node</td>
                        <td><code>required</code></td>
                        <td>Content displayed inside the button (text, icons, etc.).</td>
                    </tr>
                    <tr>
                        <td><code>size</code></td>
                        <td>string</td>
                        <td><code>"medium"</code></td>
                        <td>Size of the button: <code>"small"</code>, <code>"medium"</code> or <code>"large"</code>.</td>
                    </tr>
                    <tr>
                        <td><code>variant</code></td>
                        <td>string</td>
                        <td><code>"primary"</code></td>
                        <td>Style of the button: <code>"primary"</code>, <code>"secondary"</code>, <code>"danger"</code>, <code>"outline"</code> or <code>"gradient"</code>.</td>
                    </tr>
                    <tr>
                        <td><code>isDisabled</code></td>
                        <td>boolean</td>
                        <td><code>false</code></td>
                        <td>Disables the button if set to <code>true</code>.</td>
                    </tr>
                    <tr>
                        <td><code>fullWidth</code></td>
                        <td>boolean</td>
                        <td><code>false</code></td>
                        <td>Makes the button stretch to fill its container if set to <code>true</code>.</td>
                    </tr>
                    <tr>
                        <td><code>onClick</code></td>
                        <td>function</td>
                        <td><code>null</code></td>
                        <td>Callback function triggered on when the button is clicked.</td>
                    </tr>
                </tbody>

            </table>
            <p>Example of usage: <code>{`<Button size="large" variant="gradient">Click Me</Button>`}</code></p>
        </div>
    )
}