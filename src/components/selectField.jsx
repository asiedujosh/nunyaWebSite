import { useEffect } from "react"

const SelectField = ({ field, value, change, options }) => {
  useEffect(() => {
    change(options && options[0], field.name)
  }, [])

  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-1"
        htmlFor={field.name}
      >
        {field.label}
      </label>
      <select
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {options &&
          options.map((item) => {
            return <option value={item}>{item}</option>
          })}
      </select>
    </div>
  )
}

export default SelectField
