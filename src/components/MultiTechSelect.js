import React from 'react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'

export default function MultiTechSelect({ location }) {
    const techs = [
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'JavaScript', label: 'JavaScript' },
    ];

    const customStyles = {
        dropdownButton: provided => ({
            ...provided,
            minWidth: location ? 250 : 200,
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
            placeholderButtonLabel={location ? 'Select Required Technologies' : 'Required Technologies'}
            options={techs}
            styles={customStyles}
        />
    )
}
