import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";

function CommentDialog({ open, setOpen }) {
  return (
    <Dialog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)}>
        <img
          className="rounded-sm my-2 w-full aspect-square object-cover"
          src="https://plus.unsplash.com/premium_photo-1664121799890-b5605834b72a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Comment_img"
        />
      </DialogContent>
    </Dialog>
  );
}

export default CommentDialog;
