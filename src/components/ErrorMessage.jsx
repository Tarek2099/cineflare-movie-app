const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <h2>Something Went Wrong</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
