import "./home.css";

type Order = {
  id: string;
  status: string;
  date: string;
  total: number;
  items: string[];
};

const orders: Order[] = [
  {
    id: "#0004",
    status: "Em transporte",
    date: "24/09/2026",
    total: 379.8,
    items: ["🧙 Action Figure", "🃏 TCG Collection"],
  },
  {
    id: "#0003",
    status: "Entregue",
    date: "18/09/2026",
    total: 189.9,
    items: ["⚔️ Espada decorativa"],
  },
];

function Home() {
  return (
    <main className="home">
      <section className="home-header">
        <span className="home-eyebrow">RARITYROOM</span>

        <h1>
          Olá, <span>Luana!</span> 👋
        </h1>

        <p>Acompanhe seus pedidos e sua coleção.</p>
      </section>

      <section className="order-summary">
        <div className="summary-card">
          <small>PEDIDOS</small>
          <strong>{orders.length}</strong>
        </div>

        <div className="summary-card">
          <small>A CAMINHO</small>
          <strong>
            {orders.filter((order) => order.status === "Em transporte").length}
          </strong>
        </div>

        <div className="summary-card">
          <small>ENTREGUES</small>
          <strong>
            {orders.filter((order) => order.status === "Entregue").length}
          </strong>
        </div>
      </section>

      <section className="orders-section">
        <div className="section-title">
          <div>
            <span>MINHA CONTA</span>
            <h2>Meus pedidos</h2>
          </div>
        </div>

        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <div className="order-top">
                <div>
                  <span>Pedido</span>
                  <h3>{order.id}</h3>
                </div>

                <strong
                  className={
                    order.status === "Entregue"
                      ? "status delivered"
                      : "status shipping"
                  }
                >
                  {order.status}
                </strong>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="order-bottom">
                <div>
                  <small>{order.date}</small>
                  <strong>R$ {order.total.toFixed(2).replace(".", ",")}</strong>
                </div>

                <button>Ver pedido →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
