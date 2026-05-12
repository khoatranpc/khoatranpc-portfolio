import { useSearchParams } from "react-router-dom";
import { parseBtype } from "./constants/btype";
import { RubikPage } from "./RubikPage";
import { SplashPage } from "./SplashPage";
import "./rubik-scope.css";

/** Standalone Cube Mastery hub + course views (merged from rubik-landingpage). */
export function RubikEntry() {
  const [searchParams] = useSearchParams();
  const btype = parseBtype(searchParams.get("btype"));

  return (
    <div className="rubik-scope flex min-h-svh w-full min-w-0 max-w-full flex-col bg-surface text-on-surface-variant antialiased">
      {btype ? <RubikPage /> : <SplashPage />}
    </div>
  );
}
