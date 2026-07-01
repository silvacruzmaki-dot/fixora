import {
  HiOutlineHeart,
  HiOutlineEye,
} from "react-icons/hi2";

export default function CreativeStats({
  likes,
  views,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-5
        text-sm
        text-muted
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <HiOutlineHeart />

        {likes}
      </div>

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <HiOutlineEye />

        {views}
      </div>
    </div>
  );
}