import React, { useState } from 'react'
import MultiSelect from 'react-multi-select-component'

export default function MyMultiSelect({ type, location }) {
    const techs = [
        { value: 1, label: 'HTML' },
        { value: 2, label: 'CSS' },
        { value: 3, label: 'JavaScript' },
    ];

    const difficultyLvls = [
        { value: 1, label: 'Easy' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'Hard' }
    ]

    const assets = [
        { value: '1', label: 'Has Assets' },
        { value: '0', label: 'No Assets' },
    ]
    const [selected, setSelected] = useState([]);

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


        // styles={customStyles}
        />
    )
}
