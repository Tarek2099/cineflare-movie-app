const ErrorMessage = ({ message }) => {
  return (
    <div className="p-4 m-2 error-message flex flex-col justify-center items-center text-white bg-dark-100 rounded-md shadow-inner shadow-light-100/10">
      <h2>Something Went Wrong</h2>
      <p className="text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;
