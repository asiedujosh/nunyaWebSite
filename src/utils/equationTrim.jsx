const equationTrim = (data) => {
  let replaceData = data.replace("&#92;", "\\").replace("&#92;", "\\")
  console.log(replaceData)
  return replaceData
}

export default equationTrim
