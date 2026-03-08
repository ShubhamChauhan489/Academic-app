function QuickLinks() {
    const links = [
      { name: "Gmail", url: "https://mail.google.com", color: "bg-red-500" },
      { name: "Google Drive", url: "https://drive.google.com", color: "bg-green-500" },
      { name: "Google Sheets", url: "https://docs.google.com/spreadsheets", color: "bg-green-600" },
      { name: "Google Docs", url: "https://docs.google.com/document", color: "bg-green-400" },
      { name: "StackOverflow", url: "https://stackoverflow.com", color: "bg-orange-500" },
      { name: "University Portal", url: "https://your-university-portal.com", color: "bg-blue-500" }
    ];
  
    return (
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mt-8">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Quick Access
        </h2>
  
        <div className="grid grid-cols-3 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white font-bold p-4 rounded flex justify-center items-center hover:scale-105 transition-transform`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default QuickLinks;