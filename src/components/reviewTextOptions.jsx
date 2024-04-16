const ReviewTextOptions = ({ data, dataInfo, checkColor }) => {
  return (
    <div className="mt-4">
      {data.split("**").map((item) => (
        <span
          className="px-4 py-2 mb-2 mx-2 block bg-slate-300  text-white text-xl"
          style={{
            backgroundColor: checkColor(data, dataInfo[0], dataInfo[1], item),
          }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default ReviewTextOptions
