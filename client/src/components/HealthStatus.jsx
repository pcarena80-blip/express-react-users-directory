function HealthStatus({ status }) {
  const isHealthy = status === "ok";

  return (
    <div className={`health-status ${isHealthy ? "healthy" : "unhealthy"}`}>
      <span className="status-dot" aria-hidden="true" />
      <span>Health: {status}</span>
    </div>
  );
}

export default HealthStatus;
