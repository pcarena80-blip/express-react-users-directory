function SearchInput({ value, onChange }) {
  return (
    <label className="search-field">
      <span>Search users by full name</span>
      <input
        type="search"
        value={value}
        placeholder="Try Steven, Hassan, or Suham"
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default SearchInput;
