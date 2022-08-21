import { ClipLoader } from "react-spinners";

export default function PostLoading() {
  return (
    <div class="text-white bg-gray-900 w-screen mx-auto text-center h-screen flex justify-center items-center">
      <div>
        <h2 class="text-2xl font-bold sm:text-3xl">Loading...</h2>
        <br />
        <ClipLoader color={"#100"} size={100} className="loader" />
        <p class="mx-auto mt-4 text-gray-500">Refresh if it doesn't load</p>
      </div>
    </div>
  );
}
