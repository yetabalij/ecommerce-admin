"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { stat } from "fs";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((stat) => stat.onOpen);
  const isOpen = useStoreModal((stat) => stat.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div>Root Page</div>;
}
