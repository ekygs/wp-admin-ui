import { useState, useEffect, useRef } from "@wordpress/element";

import { Field, Image, Button } from "../";

export default function Video(props) {
  const { video = null, onChange = () => null } = props;
  const [showCustom, setShowCustom] = useState(false);
  const inputRef = useRef(null);

  const openMedia = () => {
    const uploader = wp
      .media({
        title: "Set Video",
        mutliple: false,
        library: {
          type: ["video"],
        },
      })
      .open()
      .on("select", () => {
        const { id, url } = uploader.state().get("selection").first().toJSON();
        onChange({ ...video, id, url });
      });
  };

  const onImageChange = (image) => {
    let tempVideo = { id: video?.id, url: video?.url, image: null };

    if (image !== null) {
      const { id, url, height, width } = image;
      tempVideo.image = { id, url, height, width };
    }

    onChange(tempVideo);
  };

  useEffect(() => {
    if (inputRef.current === null) {
      return;
    }

    const blur = () => setShowCustom(false);

    inputRef.current.addEventListener("blur", blur);
    inputRef.current.focus();

    return () =>
      inputRef.current !== null &&
      inputRef.current.removeEventListener("blur", blur);
  }, [showCustom]);

  return (
    <div className="wau-video">
      <div className="wau-video__options">
        <Button onClick={() => openMedia()} type="link">
          Set from Media
        </Button>
        <Button onClick={() => setShowCustom(true)} type="link">
          Set Custom Url
        </Button>
      </div>
      {(showCustom || (video?.url && video?.url !== "")) && (
        <Field label="Video Url">
          <input
            value={video?.url || ""}
            onChange={(evt) =>
              onChange({
                id: null,
                image: video?.image || null,
                url: evt.target.value,
              })
            }
            ref={inputRef}
            className="wau-video__input"
          />
        </Field>
      )}
      <Field label="Video Still">
        <Image
          image={video?.image || null}
          onChange={onImageChange}
          placeholder="Set Video Still"
        />
      </Field>
    </div>
  );
}
