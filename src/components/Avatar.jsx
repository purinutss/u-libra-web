import profileImage from "../assets/default_pic.png";

export default function Avatar({ src, size }) {
  return (
    <div className="self-center">
      <img
        src={src || profileImage}
        className="rounded-full cursor-pointer"
        atl="user"
        width={size}
        height={size}
      />
    </div>
  );
}
