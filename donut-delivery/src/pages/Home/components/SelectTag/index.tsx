import Select, { MultiValue, StylesConfig } from 'react-select'

export interface Option {
  value: string
  label: string
}

interface SelectTagProps {
  donutTags: string[]
  onChange: (selectedOption: MultiValue<Option>) => void
}

const styles: StylesConfig<Option, true> = {
  control: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    border: '1.5px solid #C47F17',
    backgroundColor: '#F3F2F2',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: isFocused ? '0 0 0 1px #C47F17' : '',
  }),
  option: (styles) => ({
    ...styles,
    ':hover': {
      backgroundColor: '#F1E9C9',
    },
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: '#F1E9C9',
      borderRadius: '10rem',
    }
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#C47F17',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '1rem',
    padding: '0.4rem 0.8rem',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: '#403937',
    ':hover': {
      borderRadius: '0 9999px 9999px 02',

      color: 'red',
    },
  }),
  clearIndicator: (styles) => ({
    ...styles,
    color: '#C47F17',
    ':hover': {
      borderRadius: '0 9999px 9999px 02',

      color: 'red',
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#C47F17',
  }),
  placeholder: (styles) => ({ ...styles, color: '#C47F17', fontWeight: 700 }),
}

export function SelectTag({ donutTags, onChange }: SelectTagProps) {
  const filteredTags: string[] = []

  donutTags.forEach((option) => {
    if (!filteredTags.includes(option)) {
      filteredTags.push(option.toLowerCase())
    }
  })
  filteredTags.sort()

  const options: Option[] = filteredTags.map((tag) => ({
    label: tag,
    value: tag,
  }))
  return (
    <Select
      isMulti
      placeholder="Categorias"
      name="category"
      isSearchable={false}
      styles={styles}
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
    />
  )
}
