const SignBtn = ({ btnText, action, fullWidth }) => {
  const handleAction = () => {
    action()
  }

  return (
    <button
      onClick={handleAction}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded focus:outline-none focus:shadow-outline ${
        fullWidth && "w-full"
      }`}
      type="button"
    >
      {btnText}
    </button>
  )
}

export default SignBtn
