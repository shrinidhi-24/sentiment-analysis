import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import a from "./abc.jpeg"
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

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
    img: {
      width: "100%",
      height: "550px",
      objectFit: "cover",
      borderRadius: "8px",
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

  // Data for pie chart
  const pieData = {
    labels: ["Happy", "Sad", "Neutral"],
    datasets: [
      {
        data: [50, 30, 20], // Replace with dynamic values if needed
        backgroundColor: ["#4caf50", "#f44336", "#ffc107"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sentiment Analysis Dashboard</h1>

      {/* Row 1 */}
      <div style={styles.row}>
        <div style={styles.card}>
          <h3>Post from Platform (Image/Video)</h3>
          <img
            src={a} // Replace this URL with your image's actual URL
            alt="Platform Content"
            style={styles.img}
          />
        </div>
        <div style={styles.card}>
          <h3>Analysis of Image</h3>
          <p>Happy: 50%</p>
          <p>Sad: 30%</p>
          <p>Neutral: 20%</p>
        </div>
        <div style={styles.card}>
          <h3>Sentiment Distribution</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Engagement Metrics */}
      <div style={styles.card}>
        <h3>Engagement Metrics</h3>
        <p>Likes: {engagementMetrics.likes}</p>
        <p>Comments: {engagementMetrics.comments}</p>
        <p>Shares: {engagementMetrics.shares}</p>
      </div>

      {/* Row 3 */}
      <div style={styles.row}>
        <div style={styles.card}>
          <h3>Performance Metrics</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Metric
                </th>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Visual Pipeline
                </th>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Text Pipeline
                </th>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Combined Output
                </th>
              </tr>
            </thead>
            <tbody>
              {performanceMetrics.map((row, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.metric}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.visual}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.text}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.combined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.card}>
          <h3>Platform Analysis</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Platform
                </th>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Positive (%)
                </th>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Neutral (%)
                </th>
                <th style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "left" }}>
                  Negative (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {platformAnalysis.map((row, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.platform}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.positive}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.neutral}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{row.negative}</td>
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
