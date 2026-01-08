export default function TeamPage() {
    const teamMembers = [
        {
            id: 1,
            name: "Saniya Khan",
            role: "Project Manager",
            status: "Active",
        },
        {
            id: 2,
            name: "Rohit Verma",
            role: "Software engineer ",
            status: "Active",
        },
        {
            id: 3,
            name: "Neha Sharma",
            role: "UI/UX Designer",
            status: "Inactive",
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Team
            </h1>

            <p style={{ color: "#aaa", marginBottom: "20px" }}>
                Manage your team members
            </p>

            {teamMembers.map((member) => (
                <div
                    key={member.id}
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
                        <h3 style={{ fontSize: "18px" }}>{member.name}</h3>
                        <p style={{ color: "#bbb" }}>{member.role}</p>
                    </div>

                    <span
                        style={{
                            fontSize: "14px",
                            padding: "6px 12px",
                            borderRadius: "20px",
                            background:
                                member.status === "Active" ? "#14532d" : "#3f3f46",
                        }}
                    >
                        {member.status}
                    </span>
                </div>
            ))}
        </div>
    );
}
