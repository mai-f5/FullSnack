import React from 'react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'

export default function MultiTechSelect() {
    const techs = [
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'JavaScript', label: 'JavaScript' },
    ];

    const customStyles = {
        dropdownButton: provided => ({
            ...provided,
            border: '1px #ced4da solid',
            backgroundColor: 'transparent !important',
            borderRadius: 10,
            fontSize: '1rem',
            boxShadow: 'none',
            padding: 5,

        }),
    };
    return (
        <ReactMultiSelectCheckboxes
            placeholderButtonLabel='Required Technologies'
            options={techs}
            styles={customStyles}
        />
    )
}
