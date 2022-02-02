import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./profileImage.scss";

ProfileImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string,
};

function ProfileImage({ src, size, name, ...props }) {
  const [imageText, setImageText] = useState();

  useEffect(() => {
    if (name) {
      setImageText(name.split(" ").map((name) => name[0]));
    }
  }, [name]);

  return src ? (
    <img
      src={src}
      {...props}
      className={`profile-image ${size}`}
      alt="Profile Picture"
    />
  ) : (
    <span className={`profile-image__text ${size}`} {...props}>
      <span>{imageText || "MF"}</span>
    </span>
  );
}

export default ProfileImage;
