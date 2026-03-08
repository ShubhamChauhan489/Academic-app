function DashboardCards() {
    return (
      <div className="grid grid-cols-2 gap-6">
  
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>
          <ul className="space-y-2">
            <li>✔ Prepare ML Lecture</li>
            <li>✔ Check Assignments</li>
            <li>⬜ Write Research Paper</li>
          </ul>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Upcoming Lecture</h2>
          <p>Machine Learning</p>
          <p>Topic: Decision Trees</p>
          <p>Time: 2:00 PM</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Research Notes</h2>
          <p>LSTM + XGBoost Hybrid Model</p>
          <p>Dataset: EV Charging Data</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="space-y-2">
            <a href="https://mail.google.com" className="block text-blue-600">Gmail</a>
            <a href="https://drive.google.com" className="block text-blue-600">Google Drive</a>
            <a href="https://meet.google.com" className="block text-blue-600">Google Meet</a>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default DashboardCards;