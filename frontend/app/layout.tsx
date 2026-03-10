import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navy text-primary">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <header className="bg-slate px-6 py-4 flex items-center justify-between shadow">
              <h1 className="text-2xl font-bold text-accent">Context-Aware Executive AI</h1>
              <span className="text-secondary">Enterprise Memory Layer</span>
            </header>
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
