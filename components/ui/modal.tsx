"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  //DialogTrigger,
} from "@/components/ui/dialog";

interface modalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<modalProps> = ({
  isOpen,
  title,
  description,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
