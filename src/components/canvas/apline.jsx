import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Apline() {
  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      <Spline scene="https://prod.spline.design/aFkUqYskYOEC39GI/scene.splinecode" />
    </Suspense>
  );
}
