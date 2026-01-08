export default function SettingsPage() {
    return (
      <div style={{ padding: "20px", maxWidth: "600px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Settings
        </h1>
  
        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Manage your account settings
        </p>
  
        {/* Profile Section */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ marginBottom: "8px" }}>Profile</h3>
  
          <input
            type="text"
            placeholder="Full Name"
            value="Saniya Khan"
            disabled
            style={inputStyle}
          />
  
          <input
            type="email"
            placeholder="Email"
            value="saniya@example.com"
            disabled
            style={inputStyle}
          />
        </div>
  
        {/* Password Section */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ marginBottom: "8px" }}>Password</h3>
  
          <input
            type="password"
            placeholder="Current Password"
            style={inputStyle}
          />
  
          <input
            type="password"
            placeholder="New Password"
            style={inputStyle}
          />
        </div>
  
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#2563eb",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </div>
    );
  }
  
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#0f0f0f",
    color: "#fff",
  };
  