import React, { useState, useEffect } from 'react'
import MultiSelect from 'react-multi-select-component'
import api from '../DAL/api'

export default function MyMultiSelect({ type, location }) {

    const assets = [
        { value: '1', label: 'Has Assets' },
        { value: '0', label: 'No Assets' }
    ]
    const [techs, setTechs] = useState([])
    const [difficultyLvls, setDifficultyLevels] = useState([])
    const [selected, setSelected] = useState([]);
    console.log(selected)

    useEffect(() => {
        api.getRequiredTechsList().then(data => {
            setTechs([...data])
        })

        api.getDifficultyLevelsList().then(data => {
            setDifficultyLevels([...data])
        })
    }, [])

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => label).join(', ')
            : type === 'tech' ?
                location ? 'Select Required Technologies' : 'Required Technologies'
                : type === 'difficultyLvls' ? 'Difficulty Levels' : 'Assets'
    };

    return (
        <MultiSelect
            className='multi-select mb-3'
            options={type === 'tech' ? techs : type === 'difficultyLvls' ? difficultyLvls : assets}
            value={selected}
            onChange={setSelected}
            hasSelectAll={type === 'tech'}
            disableSearch={type !== 'tech'}
            valueRenderer={customValueRenderer}
        />
    )
}
