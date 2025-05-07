export default function Video(props) {
  const { video = null, onChange = () => null } = props;

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
        onChange({ id, url });
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

  return (
    <div className="wau-video">
      <image
        label="Video Still"
        image={video?.image || null}
        onChange={onVideoChange}
      />
    </div>
  );
}
