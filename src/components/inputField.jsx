import React from "react"

const InputField = ({ field, value, change, err }) => {
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
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={field.type}
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        placeholder={field.placeholder}
      />
      {err && err[0].errName === field && (
        <span className="text-red-500 text-xs italic">{err[0].errMsg}</span>
      )}
    </div>
  )
}

export default InputField
