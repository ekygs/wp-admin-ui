export default function Image(props) {
  const {
    image = null,
    onChange = () => null,
    maxWidth = null,
    placeholder = "Select Image",
  } = props;

  const openMedia = () => {
    const uploader = wp
      .media({
        title: "Set Image",
        mutliple: false,
        library: {
          type: ["image"],
        },
      })
      .open()
      .on("select", () => {
        const { id, url, alt, height, width, caption } = uploader
          .state()
          .get("selection")
          .first()
          .toJSON();

        onChange({ id, url, alt, height, width, caption });
      });
  };

  let imageClass = "wau-image";

  if (image !== null && image.height > image.width) {
    imageClass += " wau-image--inverted";
  }

  let style = {};
  if (maxWidth !== null) {
    style.maxWidth = maxWidth;
  }

  return (
    <div className="wau-image__wrapper" style={style}>
      <div className={imageClass}>
        {image === null ? (
          <button className="wau-image__select" onClick={openMedia}>
            {placeholder}
          </button>
        ) : (
          <>
            <img className="wau-image__image" src={image.url} />
            <div className="wau-image__options">
              <button className="wau-image__button" onClick={openMedia}>
                Update
              </button>
              <button
                className="wau-image__button"
                onClick={() => onChange(null)}
              >
                Remove
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
