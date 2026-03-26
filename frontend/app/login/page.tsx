import { Suspense } from "react";

import Login from "@/components/features/Auth/Login";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <Login />
    </Suspense>
  );
}
