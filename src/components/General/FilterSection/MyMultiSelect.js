import React, { useState, useEffect } from 'react'
import MultiSelect from 'react-multi-select-component'
import api from '../../../DAL/api'

export default function MyMultiSelect({ onSelectChange, type, location }) {

    const assets = [
        { value: '1', label: 'Has Assets' },
        { value: '0', label: 'No Assets' }
    ]
    const [reqTechs, setReqTechs] = useState([])
    const [difficultyLvls, setDifficultyLevels] = useState([])

    const [selected, setSelected] = useState([]);

    useEffect(() => {
        api.getRequiredTechsList().then(data => {
            setReqTechs([...data])
        })

        api.getDifficultyLevelsList().then(data => {
            setDifficultyLevels([...data])
        })
    }, [])

    useEffect(() => {
        onSelectChange(({ target: { name: type === 'reqTechs' ? 'requiredTechs' : type === 'difficultyLvls' ? 'difficultyLevels' : 'assets', value: selected.map(obj => obj.value) } }))
    }, [selected])

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => label).join(', ')
            : type === 'reqTechs' ?
                location ? 'Select Required Technologies' : 'Required Technologies'
                : type === 'difficultyLvls' ? 'Difficulty Levels' : 'Assets'
    };

    return (
        <MultiSelect
            className='multi-select mb-3'
            options={type === 'reqTechs' ? reqTechs : type === 'difficultyLvls' ? difficultyLvls : assets}
            value={selected}
            onChange={(e) => {
                setSelected(e)
            }}
            hasSelectAll={type === 'reqTechs'}
            disableSearch={type !== 'reqTechs'}
            valueRenderer={customValueRenderer}
            on
        />
    )
}
