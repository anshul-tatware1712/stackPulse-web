import { Route, Routes } from "react-router-dom"

import { AppShell } from "@/components/layout/AppShell"
import { NotFoundPage } from "@/components/NotFoundPage"
import { LoginPage } from "@/features/auth/LoginPage"
import { ProtectedRoute, PublicOnlyRoute } from "@/features/auth/ProtectedRoute"
import { SignupPage } from "@/features/auth/SignupPage"
import { HomePage } from "@/features/search/HomePage"

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
