export const removePTags = (sentence) => {
  // Regular expression to match opening and closing p tags
  const pTagRegex = /<p>|<\/p>/g
  // Replace opening and closing p tags with an empty string
  const result = sentence.replace(pTagRegex, "")
  return result
}
