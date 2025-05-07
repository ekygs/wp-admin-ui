import { useState } from "@wordpress/element";

import { Button, Tooltip } from "../";

export default function SlideOptions(props) {
  const {
    items = [],
    onRenderItem = () => {},
    onAdd = () => null,
    onRemove = () => null,
  } = props;

  const [index, setIndex] = useState(0);

  const onNavigate = (direction) => {
    let newIndex = direction + index;

    if (items.length <= 1 || newIndex > items.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = items.length - 1;
    }

    setIndex(newIndex);
  };

  const handleItemRemove = (index) => {
    let tempItems = [...items];
    tempItems.splice(index, 1);
    onRemove(tempItems);

    let lastIndex = tempItems.length - 1;
    lastIndex = lastIndex >= 0 ? lastIndex : 0;

    if (index > lastIndex) {
      setIndex(lastIndex);
    }
  };

  const handleItemAdd = () => {
    onAdd();
    setIndex(items.length);
  };

  return (
    <div className="slide-options">
      <div className="slide-options__actions">
        <div className="slide-options__current">
          {items.length > 0 && (
            <>
              Item {index + 1} of {items.length}
            </>
          )}
        </div>
        {items.length > 1 && (
          <div className="slide-options__group">
            <Tooltip text="Previous Item">
              <Button
                icon={<i className="fa fa-angle-left"></i>}
                onClick={() => onNavigate(-1)}
              />
            </Tooltip>
            <Tooltip text="Next Item">
              <Button
                icon={<i className="fa fa-angle-right"></i>}
                onClick={() => onNavigate(1)}
              />
            </Tooltip>
          </div>
        )}
        <div className="slide-options__group">
          {items.length > 0 && (
            <Tooltip text="Remove Item">
              <Button
                icon={<i className="fa fa-minus"></i>}
                onClick={() => handleItemRemove(index)}
              />
            </Tooltip>
          )}
          <Tooltip text="Add Item">
            <Button
              icon={<i className="fa fa-plus"></i>}
              onClick={() => handleItemAdd()}
            />
          </Tooltip>
        </div>
      </div>
      {items.length > 0 && (
        <div className="slide-options__items">
          {onRenderItem(items[index], index)}
        </div>
      )}
    </div>
  );
}
