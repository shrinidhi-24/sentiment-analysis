import React from "react";

const Dashboard = () => {
  // Inline styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f4f4f9",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    card: {
      flex: "1",
      margin: "10px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    tableContainer: {
      flex: "1",
      margin: "10px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "left",
      padding: "10px",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    placeholder: {
      width: "100%",
      height: "150px",
      backgroundColor: "#e0e0e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    },
    engagementCard: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  };

  // Mock data
  const performanceMetrics = [
    { metric: "Accuracy", visual: "93.2%", text: "91.5%", combined: "95.3%" },
    { metric: "Precision", visual: "92.8%", text: "90.9%", combined: "94.7%" },
    { metric: "Recall", visual: "93.5%", text: "91.3%", combined: "95.0%" },
  ];

  const platformAnalysis = [
    { platform: "Instagram", positive: 42, neutral: 36, negative: 22 },
    { platform: "YouTube", positive: 48, neutral: 34, negative: 18 },
    { platform: "Twitter", positive: 45, neutral: 30, negative: 25 },
  ];

  const engagementMetrics = {
    likes: 1200,
    comments: 450,
    shares: 300,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sentiment Analysis Dashboard</h1>

      {/* Row 1 */}
      <div style={styles.row}>
        <div style={styles.card}>
          <h3>Post from Platform (Image/Video)</h3>
          <div style={styles.placeholder}>Content Placeholder</div>
        </div>
        <div style={styles.card}>
          <h3>Analysis of Image</h3>
          <p>Happy: 50%</p>
          <p>Sad: 30%</p>
          <p>Neutral: 20%</p>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div style={styles.engagementCard}>
        <h3>Engagement Metrics</h3>
        <p>Likes: {engagementMetrics.likes}</p>
        <p>Comments: {engagementMetrics.comments}</p>
        <p>Shares: {engagementMetrics.shares}</p>
      </div>

      {/* Row 3 */}
      <div style={styles.row}>
        <div style={styles.tableContainer}>
          <h3>Performance Metrics</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Metric</th>
                <th style={styles.th}>Visual Pipeline</th>
                <th style={styles.th}>Text Pipeline</th>
                <th style={styles.th}>Combined Output</th>
              </tr>
            </thead>
            <tbody>
              {performanceMetrics.map((row, index) => (
                <tr key={index}>
                  <td style={styles.td}>{row.metric}</td>
                  <td style={styles.td}>{row.visual}</td>
                  <td style={styles.td}>{row.text}</td>
                  <td style={styles.td}>{row.combined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.tableContainer}>
          <h3>Platform Analysis</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Platform</th>
                <th style={styles.th}>Positive (%)</th>
                <th style={styles.th}>Neutral (%)</th>
                <th style={styles.th}>Negative (%)</th>
              </tr>
            </thead>
            <tbody>
              {platformAnalysis.map((row, index) => (
                <tr key={index}>
                  <td style={styles.td}>{row.platform}</td>
                  <td style={styles.td}>{row.positive}</td>
                  <td style={styles.td}>{row.neutral}</td>
                  <td style={styles.td}>{row.negative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
