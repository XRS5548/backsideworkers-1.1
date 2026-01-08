import { Description } from "@radix-ui/react-dialog";

export default function ProjectsPage() {
    const myTasks = [
        {
            id: 1,
            title: "Landing Page Design",
            description: "Design homepage for client website",
            status: "Pending",
        },
        {
            id: 2,
            title: "Backend API",
            description: "Create login & register API",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Fronted",
            description: "Create login & register API",
            status: "In Progress",
        },
        
    ];

    return (
        <div>
            <h1>My Projects</h1>

            {myTasks.map((task) => (
                <div
                    key={task.id}
                    style={{
                        border: "1px solid #333",
                        padding: "16px",
                        marginTop: "12px",
                        borderRadius: "8px",
                    }}
                >
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <strong>Status: {task.status}</strong>
                </div>
            ))}
        </div>
    );
}
