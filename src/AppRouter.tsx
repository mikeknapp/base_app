import React from "react";
import { Route, Routes } from "react-router-dom";
import * as app from "./exports";

export function AppRouter() {
  return (
    <app.AuthenticatedPageWrapper>
      <Routes>
        <Route path={app.loginUrl} element={<app.LoginPage />}></Route>
        <Route path={app.homeUrl} element={<app.HomePage />}></Route>
        <Route path="*" element={<app.Error404Page link={app.loginUrl} />}></Route>
      </Routes>
    </app.AuthenticatedPageWrapper>
  )
}
