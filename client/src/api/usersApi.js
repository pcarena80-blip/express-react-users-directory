const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3000";

async function requestJson(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);

  if (!response.ok) {
    const fallbackMessage = `Request failed with status ${response.status}`;
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.error?.message || fallbackMessage);
  }

  return response.json();
}

export function fetchHealth() {
  return requestJson("/health");
}

export function fetchUsers(searchTerm, signal) {
  const search = searchTerm.trim();
  const query = search ? `?search=${encodeURIComponent(search)}` : "";

  return requestJson(`/users${query}`, { signal });
}
