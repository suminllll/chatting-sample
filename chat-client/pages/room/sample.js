import React from "react";
import useGuard from "../../src/hooks/useGuard";

export default function Sample() {
  const { user } = useGuard();

  return <div>Sample, {JSON.stringify(user)} </div>;
}
