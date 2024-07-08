function SearchBox({ value, onChange, onSubmit }) {
  return (
    <div>
      <form className="search-form" onSubmit={onSubmit}>
        <div className="search-container">
          <input
            type='search'
            id="searchInput"
            className="search"
            placeholder="근처 충전소 검색하기"
            value={value}
            onChange={onChange}
          />
          <button
            className='search-btn'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
