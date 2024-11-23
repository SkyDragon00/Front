export default function Layout({ children }) {
    return (
      <div>
        <header>
          <h1>Steam-like</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  