import React, { useState, useEffect } from 'react'
import MultiSelect from 'react-multi-select-component'
import { getRequiredTechsList, getDifficultyLevelsList } from '../../../DAL/staticData'

export default function MyMultiSelect({ onSelectChange, onChange, type, location, checkedValues, onSelectBlur }) {
    const assets = [
        { value: '1', label: 'Has Assets' },
        { value: '0', label: 'No Assets' }
    ]
    const [requiredTechnologies, setReqTechs] = useState([])
    const [difficultyLvls, setDifficultyLevels] = useState([])

    const [selected, setSelected] = useState([]);

    useEffect(() => {
        (async () => {
            const reqTechs = await getRequiredTechsList()
            setReqTechs([...reqTechs])
            const difficulties = await getDifficultyLevelsList()
            setDifficultyLevels([...difficulties])
            if (type === 'requiredTechnologies' && location) { setSelected(checkedValues) }
        })();
    }, [])

    useEffect(() => {
        onSelectChange(({ target: { name: type === 'requiredTechnologies' ? 'requiredTechnologies' : type === 'difficultyLvls' ? 'difficultyLevels' : 'assets', value: selected.map(obj => obj.value) } }))
    }, [selected])


    function validateSelection(e) {
        if (!e) {
            if (type === 'requiredTechnologies' && location) {
                onSelectBlur(({ target: { name: 'requiredTechnologies', value: selected.map(obj => obj.value) } }))
            }
        }
    }

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => label).join(', ')
            : type === 'requiredTechnologies' ?
                location ? 'Select Required Technologies' : 'Required Technologies'
                : type === 'difficultyLvls' ? 'Difficulty Levels' : 'Assets Included'
    };

    return (
        <MultiSelect
            className='multi-select mb-3'
            options={type === 'requiredTechnologies' ? requiredTechnologies : type === 'difficultyLvls' ? difficultyLvls : assets}
            value={selected}
            onChange={(e) => {
                setSelected(e)
                if (location) {
                    onChange()
                }
            }}

            hasSelectAll={type === 'requiredTechnologies'}
            disableSearch={type !== 'requiredTechnologies'}
            valueRenderer={customValueRenderer}
            onMenuToggle={validateSelection}

        />
    )
}
