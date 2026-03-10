import { useState } from 'react';

export default function UploadPanel() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setStatus('Uploading...');
    setProgress(30);
    // TODO: POST /api/upload
    setTimeout(() => {
      setProgress(100);
      setStatus('Indexed!');
    }, 1200);
  };

  return (
    <div className="bg-panel rounded-xl p-4 shadow flex flex-col gap-2">
      <h3 className="text-lg font-bold mb-2 text-accent">Upload File</h3>
      <input type="file" accept=".pdf,.csv,.docx,.txt" onChange={handleUpload} className="mb-2" />
      {progress > 0 && <div className="w-full bg-slate h-2 rounded"><div className="bg-accent h-2 rounded" style={{ width: `${progress}%` }}></div></div>}
      <span className="text-secondary mt-1">{status}</span>
    </div>
  );
}
