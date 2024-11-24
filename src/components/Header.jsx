import Search from "./Search";

const Header = ({ title, handleSubmit, handleInputChange }) => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: '#EC8305',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white">FindProH8</a>
        <Search handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
      </div>
    </nav>
  );
};

export default Header;
