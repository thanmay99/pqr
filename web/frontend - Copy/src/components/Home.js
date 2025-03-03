import React, { useState } from "react";
import Dashboard from "./Dashboard";
import CourseModules from "./CourseModules";
import AITutor from "./AITutor";
import PerformanceAnalytics from "./PerformanceAnalytics";
import GamifiedLearning from "./GamifiedLearning";
import NotesResources from "./NotesResources";
import Community from "./Community";
import Settings from "./Settings";

const Home = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="p-4 bg-gray-800 flex justify-between">
        <h1 className="text-2xl font-bold">AI Learning Assistant</h1>
        <div className="space-x-4">
          <button onClick={() => setActiveTab("dashboard")} className="p-2 bg-green-500 rounded">Dashboard</button>
          <button onClick={() => setActiveTab("courses")} className="p-2 bg-green-500 rounded">Courses</button>
          <button onClick={() => setActiveTab("tutor")} className="p-2 bg-green-500 rounded">AI Tutor</button>
          <button onClick={() => setActiveTab("analytics")} className="p-2 bg-green-500 rounded">Analytics</button>
          <button onClick={() => setActiveTab("games")} className="p-2 bg-green-500 rounded">Gamified</button>
          <button onClick={() => setActiveTab("notes")} className="p-2 bg-green-500 rounded">Notes</button>
          <button onClick={() => setActiveTab("community")} className="p-2 bg-green-500 rounded">Community</button>
          <button onClick={() => setActiveTab("settings")} className="p-2 bg-green-500 rounded">Settings</button>
        </div>
      </nav>

      <div className="p-6">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "courses" && <CourseModules />}
        {activeTab === "tutor" && <AITutor />}
        {activeTab === "analytics" && <PerformanceAnalytics />}
        {activeTab === "games" && <GamifiedLearning />}
        {activeTab === "notes" && <NotesResources />}
        {activeTab === "community" && <Community />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default Home;