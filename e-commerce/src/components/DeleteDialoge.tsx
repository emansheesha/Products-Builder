import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const DeleteDialoge = ({
  isDeleteDialogeOpen,
  setIsDeleteDialogeOpen,
  handleDeleteProduct,
}: {
  isDeleteDialogeOpen: boolean;
  setIsDeleteDialogeOpen: (state: boolean) => void;
  handleDeleteProduct: () => void;
}) => {
  return (
    <>
      <Dialog
        open={isDeleteDialogeOpen}
        onClose={() => setIsDeleteDialogeOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
          <DialogPanel className="max-w-lg space-y-4  bg-white p-6  rounded-sm backdrop-blur-3xl">
            <DialogTitle className="font-bold">Remove Product</DialogTitle>
            <Description>This will permanently remove your product</Description>
            <p>
              Are you sure you want to delete this product? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                className="!bg-[#673ab7]
        text-cyan-50 rounded-md"
                onClick={() => setIsDeleteDialogeOpen(false)}
              >
                Cancel
              </button>
              <button
                className="!bg-[#bf1808] text-white rounded-md"
                onClick={() => {
                  handleDeleteProduct();
                  setIsDeleteDialogeOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default DeleteDialoge;
