import { Link, Outlet } from "react-router";
import { Button } from "../components/ui/button";

export const Lauout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b bg-card">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
              U
            </span>

            <div>
              <p className="text-lg font-semibold tracking-tight">
                UserHub
              </p>

              <p className="text-xs text-muted-foreground">
                User Management
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary">
              <Link to="/">Home</Link>
            </Button>

            <Button asChild variant="ghost">
              <Link to="/about">About</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};