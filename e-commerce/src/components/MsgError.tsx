const MsgError = ({ msg }: { msg: string }) => {
  return (
    <>
      {msg && (
        <div className="flex items-center  text-red-700 py-0.5 text-sm ">
          {msg}
        </div>
      )}
    </>
  );
};
export default MsgError;
