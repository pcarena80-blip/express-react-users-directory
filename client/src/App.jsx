import { useEffect, useState } from "react";
import { fetchHealth, fetchUsers } from "./api/usersApi";
import HealthStatus from "./components/HealthStatus";
import SearchInput from "./components/SearchInput";
import StatusMessage from "./components/StatusMessage";
import UserList from "./components/UserList";

function App() {
  const [healthStatus, setHealthStatus] = useState("checking");
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadHealth() {
      try {
        const health = await fetchHealth();
        setHealthStatus(health.status);
      } catch {
        setHealthStatus("error");
      }
    }

    loadHealth();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const usersResponse = await fetchUsers(searchTerm, controller.signal);
        setUsers(usersResponse);
      } catch (error) {
        if (error.name !== "AbortError") {
          setErrorMessage(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => controller.abort();
  }, [searchTerm]);

  return (
    <main className="app-shell">
      <section className="hero-section" aria-labelledby="users-heading">
        <div className="hero-content">
          <p className="eyebrow">Full Stack Interview Assignment</p>
          <h1 id="users-heading" className="hero-title">
            Users Directory
          </h1>
          <p className="hero-copy">
            Express serves the REST API, React fetches the data, and search is
            resolved by the backend in real time.
          </p>
        </div>
      </section>

      <section className="health-strip" aria-label="Backend health status">
        <span className="section-label">Server status</span>
        <HealthStatus status={healthStatus} />
      </section>

      <section className="workspace-grid" aria-label="Users">
        <section className="users-panel" aria-labelledby="users-list-heading">
          <div className="panel-heading">
            <div>
              <span className="section-label">Live Users</span>
              <h2 id="users-list-heading">Backend fetched results</h2>
            </div>
            <span className="result-count">{users.length} results</span>
          </div>

          <SearchInput value={searchTerm} onChange={setSearchTerm} />

          {isLoading && <StatusMessage>Loading users...</StatusMessage>}
          {!isLoading && errorMessage && (
            <StatusMessage variant="error">{errorMessage}</StatusMessage>
          )}
          {!isLoading && !errorMessage && <UserList users={users} />}
        </section>
      </section>
    </main>
  );
}

export default App;
