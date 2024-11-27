import Layout from "../components/Layout";
import LogoDragon from "../public/LogoDragon.png";


export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <img src={LogoDragon.src} alt="Logo" style={{ width: "100px" }} />
        <h1>Welcome to Draconic Games</h1>
      </div>
    </Layout>
  );
}