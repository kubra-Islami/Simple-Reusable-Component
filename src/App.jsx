import './App.css'
import Badge from "./components/Badge/Badge.jsx";

function App() {
    return (
        <>
            <h2>Welcome , here you can see many components which can be reused</h2>
            <Badge label="Status" value="Active" variant="success" /><br/>
            <Badge label="Status" value="Failed" variant="failed" /><br/>
            <Badge label="Status" value="Draft" /><br/>
        </>
    )
}

export default App
