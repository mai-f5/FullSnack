import { ToggleButton, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getDifficultyLevelsList, getGenderList } from "../../../DAL/staticData";

function ToggleRb({ name, onRbChange, checkedValue }) {
    const [options, setOptions] = useState([])

    useEffect(async () => {
        let options = [];
        if (name === 'gender') {
            options = await getGenderList();
        } else if (name === 'difficultyLevel') {
            options = await getDifficultyLevelsList()
        }
        setOptions([...options])
    }, [])

    return (
        <div className='toggle-rb'>
            <ButtonGroup >
                {options.map((radio, idx) => ( //value-label / id-name
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-success"
                        name={name}
                        value={name === 'gender' ? radio.id : radio.value}
                        checked={+checkedValue === (name === 'gender' ? radio.id : radio.value)}
                        onChange={(e) => onRbChange(e)}
                    >
                        {radio.label || radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    );
}

export default ToggleRb;
