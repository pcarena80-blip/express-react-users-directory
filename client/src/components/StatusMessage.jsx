function StatusMessage({ children, variant = "default" }) {
  return <p className={`status-message ${variant}`}>{children}</p>;
}

export default StatusMessage;
