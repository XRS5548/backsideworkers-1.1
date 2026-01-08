export default function MyAgentsPage() {
    const agents = [
      {
        id: 1,
        name: "Support Agent",
        role: "Customer Support",
        status: "Active",
      },
      {
        id: 2,
        name: "Sales Agent",
        role: "Lead Management",
        status: "Inactive",
      },
      {
        id: 3,
        name: "AI Assistant",
        role: "Task Automation",
        status: "Active",
      },
    ];
  
    return (
      <div style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          My Agents
        </h1>
  
        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Manage and monitor your agents
        </p>
  
        {agents.map((agent) => (
          <div
            key={agent.id}
            style={{
              border: "1px solid #333",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "12px",
              background: "#0f0f0f",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ fontSize: "18px" }}>{agent.name}</h3>
              <p style={{ color: "#bbb" }}>{agent.role}</p>
            </div>
  
            <span
              style={{
                fontSize: "14px",
                padding: "6px 12px",
                borderRadius: "20px",
                background:
                  agent.status === "Active" ? "#14532d" : "#3f3f46",
              }}
            >
              {agent.status}
            </span>
          </div>
        ))}
      </div>
    );
  }
  