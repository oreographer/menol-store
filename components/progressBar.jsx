"use client";

import React, { Suspense } from "react";
import { AppProgressBar } from "next-nprogress-bar";

const ProgressBar = () => {
  return (
    <Suspense>
      <AppProgressBar
        color="#000"
        options={{ showSpinner: false, easing: "ease", speed: "500" }}
      />
    </Suspense>
  );
};

export default ProgressBar;
