import React, {useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {Dropdown} from 'react-bootstrap';

const Currency = () => {

    const currencyArray = [
        { label: "Dollar",   symbol: "$" },
        { label: "Pound",    symbol: "£" },
        { label: "Euro",     symbol: "€" },
        { label: "Ruppee",   symbol: "₹" },
        { label: "Real",     symbol: "R$"}
        ];

    const {dispatch} = useContext(AppContext);
    const [currency, select] = useState('');

    const setCurrency = (currency) => {
        select(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency.symbol,
        });
    };

    return (
        <div class="currency">
            <Dropdown>
                <Dropdown.Toggle>
                    Currency Selector [ {currency.symbol} {currency.label} ]
                </Dropdown.Toggle>

                <Dropdown.Menu className="border border-success bg-success text-white" hover>
                    {currencyArray.map((currency) => (
                        <Dropdown.Item onClick={() => setCurrency(currency)}>
                            [ {currency.symbol} ] {currency.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Currency;