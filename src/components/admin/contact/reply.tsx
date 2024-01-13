import {
  Button,
  Textarea,
  DialogFooter,
  DialogBody,
  DialogHeader,
  Dialog,
} from "@material-tailwind/react";
import { ContactService } from "@/services/api/contact";
import { useState } from "react";

export default function ContactReplyDialog({
  selectedContact,
  isReplyDialogOpen,
  setReplyDialogOpen,
}: any) {
  const [replyText, setReplyText] = useState("");
  const [error, setError] = useState<string>();

  const handleReply = async () => {
    const response: any = await ContactService.sendReplyMessage({
      contactId: selectedContact.id,
      text: replyText,
    });

    if (!response.ok) {
      setError("Something went wrong.");
    }

    setReplyText("");
    setReplyDialogOpen(false);
  };

  const handleClose = async () => {
    setReplyText("");
    setReplyDialogOpen(false);
  };

  return (
    <Dialog
      open={isReplyDialogOpen}
      handler={handleClose}
      placeholder={undefined}
      size="lg"
    >
      <DialogHeader placeholder={undefined}>Reply to Contact</DialogHeader>
      <DialogBody placeholder={undefined}>
        <Textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className="h-32 w-full resize-none rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Type your reply here..."
        />
      </DialogBody>
      <p style={{ color: "red" }}>{error}</p>
      <DialogFooter placeholder={undefined}>
        <Button
          variant="text"
          color="red"
          onClick={handleClose}
          placeholder={undefined}
        >
          Cancel
        </Button>
        <Button
          variant="gradient"
          color="blue"
          onClick={handleReply}
          placeholder={undefined}
        >
          Send Reply
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
