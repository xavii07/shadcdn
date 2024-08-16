import { Badge } from "@/components/ui/badge";
import React from "react";

const BadgePage = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      <Badge>Badge</Badge>
      <Badge variant="destructive"> Badge</Badge>
      <Badge variant="outline"> Badge</Badge>
      <Badge variant="secondary"> Badge</Badge>
      <Badge variant="success"> Badge</Badge>
      <Badge variant="info"> Badge</Badge>
    </div>
  );
};

export default BadgePage;
