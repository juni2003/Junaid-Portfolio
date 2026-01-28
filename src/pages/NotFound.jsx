import { Home } from "lucide-react";

export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Page Not Found</p>
            <a 
                href="/" 
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
                <Home size={20} />
                Back to Home
            </a>
        </div>
    );
};
