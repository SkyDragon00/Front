export default function Layout({ children }) {
    return (
      <div>
        <header>
          <h1>Draconic Games</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  