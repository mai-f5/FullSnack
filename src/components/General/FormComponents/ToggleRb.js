import { ToggleButton, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getDifficultyLevelsList, getGenderList } from "../../../DAL/staticData";

function ToggleRb({ name, onRbChange }) {
    const [radioValue, setRadioValue] = useState('');
    const [options, setOptions] = useState([])

    useEffect(async () => {
        let options = [];
        if (name === 'gender') {
            options = await getGenderList();
        } else if (name === 'difficultyLevel') {
            options = await getDifficultyLevelsList()
        }
        setOptions([...options])
        console.log(options)
    }, [])

    console.log(radioValue)



    return (
        <div className='toggle-rb'>
            <ButtonGroup >
                {options.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-success"
                        name={name}
                        value={radio.value}
                        checked={radioValue === radio.value.toString()}
                        onChange={(e) => {
                            setRadioValue(e.target.value);
                            onRbChange(e);
                            console.log(radio.value, typeof radio.value, radioValue, typeof radioValue)
                        }}
                    >
                        {radio.label}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    );
}

export default ToggleRb;
