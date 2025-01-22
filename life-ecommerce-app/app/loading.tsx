import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "25%",
      }}
    >
      <Image src={loader || null} height={100} width={100} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
