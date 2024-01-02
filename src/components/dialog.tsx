import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function DialogAlert({
  open,
  setOpen,
  message,
}: {
  open: boolean;
  setOpen: any;
  message: string;
}) {
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen} placeholder={undefined}>
        <DialogHeader placeholder={undefined}>Confirmation</DialogHeader>
        <DialogBody placeholder={undefined}>{message}</DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button
            placeholder={undefined}
            variant="gradient"
            color="green"
            onClick={handleOpen}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
