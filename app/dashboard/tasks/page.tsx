export default function TasksPage() {
    const tasks = [
        {
            id: 1,
            title: "Design Dashboard UI",
            description: "Create sidebar and main dashboard layout",
            status: "Pending",
        },
        {
            id: 2,
            title: "API Integration",
            description: "Connect frontend with backend APIs",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Testing & Bug Fix",
            description: "Test all modules and fix issues",
            status: "Completed",
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Tasks
            </h1>

            <p style={{ color: "#aaa", marginBottom: "20px" }}>
                Manage your daily work tasks
            </p>

            {tasks.map((task) => (
                <div
                    key={task.id}
                    style={{
                        border: "1px solid #333",
                        padding: "16px",
                        borderRadius: "10px",
                        marginBottom: "12px",
                        background: "#0f0f0f",
                    }}
                >
                    <h3 style={{ fontSize: "18px" }}>{task.title}</h3>
                    <p style={{ color: "#bbb" }}>{task.description}</p>

                    <span
                        style={{
                            fontSize: "14px",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            background:
                                task.status === "Completed"
                                    ? "#14532d"
                                    : task.status === "In Progress"
                                        ? "#1e3a8a"
                                        : "#3f3f46",
                        }}
                    >
                        {task.status}
                    </span>
                </div>
            ))}
        </div>
    );
}
