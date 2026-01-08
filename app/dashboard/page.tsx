export default function DashboardPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
        Dashboard
      </h1>

      <p style={{ color: "#aaa", marginBottom: "20px" }}>
        Overview of your work
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "30px",
        }}
      >
        <Card title="Projects" value="4" />
        <Card title="Tasks" value="12" />
        <Card title="Agents" value="3" />
        <Card title="Notifications" value="5" />
      </div>


      <div>
        <h3 style={{ marginBottom: "10px" }}>Recent Activity</h3>

        <ul style={{ color: "#bbb" }}>
          <li>New task assigned</li>
          <li>Agent marked task as completed</li>
          <li>Project API Integration updated</li>
        </ul>
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "20px",
        background: "#0f0f0f",
      }}
    >
      <p style={{ color: "#aaa" }}>{title}</p>
      <h2 style={{ fontSize: "28px", marginTop: "6px" }}>{value}</h2>
    </div>
  );
}




