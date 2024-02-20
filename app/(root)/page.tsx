"use client";

import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    // <Modal title="test" isOpen description="test" onClose={() => {}}>
    //   children
    // </Modal>
    <div>
      <h1>Hello</h1>
      <Modal
        isOpen={true}
        title="Edit your Profile"
        description="Make changes to your profile here. Click save when you're done."
        onClose={() => {}}
      >
        children
      </Modal>
    </div>
  );
}
