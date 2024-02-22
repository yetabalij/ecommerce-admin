"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((stat) => stat.onOpen);
  const isOpen = useStoreModal((stat) => stat.isOpen);
  console.log(isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div>Root Page</div>;
}
