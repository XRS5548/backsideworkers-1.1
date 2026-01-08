export default function NotificationsPage() {
    const notifications = [
      {
        id: 1,
        message: "New task assigned to you",
        time: "2 minutes ago",
        type: "task",
      },
      {
        id: 2,
        message: "Agent Support Agent is now active",
        time: "1 hour ago",
        type: "agent",
      },
      {
        id: 3,
        message: "Project Backend API marked as In Progress",
        time: "Yesterday",
        type: "project",
      },
    ];
  
    return (
      <div style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Notifications
        </h1>
  
        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Recent updates and system alerts
        </p>
  
        {notifications.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #333",
              padding: "14px",
              borderRadius: "10px",
              marginBottom: "12px",
              background: "#0f0f0f",
            }}
          >
            <p style={{ fontSize: "16px" }}>{note.message}</p>
            <span style={{ fontSize: "12px", color: "#888" }}>
              {note.time}
            </span>
          </div>
        ))}
  
        {notifications.length === 0 && (
          <p style={{ color: "#777" }}>No notifications yet</p>
        )}
      </div>
    );
  }
  