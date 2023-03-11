import SyncLoader from "react-spinners/SyncLoader";

export default function Spinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[#232323aa] z-50">
      <div className="flex flex-col">
        <div className="flex justify-center mt-[45vh]">
          <SyncLoader color="#36d7b7" cssOverride={{}} loading size={15} speedMultiplier={1} />
        </div>
        <div>
          <span className="flex justify-center text-yellow-300">Please Wait</span>
        </div>
      </div>
    </div>
  );
}
