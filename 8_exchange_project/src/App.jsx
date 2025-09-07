import "./index.css"
import {use, useEffect, useState} from "react";

export default function App() {
    const [fromCurrency, setFromCurrency] = useState("EUR")
    const [toCurrency, setToCurrency] = useState("USD")
    const [amount, setAmount] = useState(null)
    const [output, setOutput] = useState(null)

    useEffect(() => {

        async function getData(){
            if (fromCurrency === toCurrency) {
                setOutput(amount)
                return
            }
            const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`)
            const data = await res.json()
            const { rates } = data
            setOutput((rates[toCurrency] * amount).toFixed(2))
        }
        getData()
    }, [amount])

  return (
      <div>
          <input type="text" onChange={(e) => setAmount(e.target.value) }/>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
          </select>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
          </select>
          <p>{output}</p>
      </div>
  )
}
