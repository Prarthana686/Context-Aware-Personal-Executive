import ChatInterface from '../components/ChatInterface';
import ReasoningPanel from '../components/ReasoningPanel';
import SourceViewer from '../components/SourceViewer';
import UploadPanel from '../components/UploadPanel';

export default function ChatPage() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <ChatInterface />
        <UploadPanel />
      </div>
      <div className="w-96 flex flex-col gap-4">
        <ReasoningPanel />
        <SourceViewer />
      </div>
    </div>
  );
}
