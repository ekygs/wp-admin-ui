import { useRef, useState, useEffect } from "@wordpress/element";
import clsx from "clsx";

import { Dropdown, Tag } from "../";
import { getTextWidth, useOutsideClick } from "../../utils";

function getInputWidth(text, container) {
  const width = getTextWidth(text, {
    fontSize: "14px",
    fontFamily: "sans-serif",
  });

  if (width < 20 || container.current === null) {
    return "20px";
  }

  const containerWidth = container.current.getBoundingClientRect().width - 42;

  if (width < containerWidth) {
    return width;
  }

  return containerWidth;
}

function getSelectOptions(selectedOptions, options, additionalAttributes) {
  const updatedSelectedOptions = selectedOptions.map((option) => ({
    ...option,
    suffix: <i className="fa fa-check"></i>,
  }));

  let filteredOptions = options.filter(
    (option) =>
      !updatedSelectedOptions.some(
        (selected) => selected.value === option.value
      )
  );

  return [...updatedSelectedOptions, ...filteredOptions].map((option) => ({
    ...option,
    ...additionalAttributes(option),
  }));
}

export default function Select(props) {
  const {
    value = null,
    options = [],
    onChange = () => null,
    onSearch = null,
    placeholder = "Select an option",
  } = props;

  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState("");
  const [storedSelectedOptions, setStoredSelectedOptions] = useState([]);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const isMultipleMode = Array.isArray(value);

  const selected = !isMultipleMode
    ? options.find((option) => option.value == value)
    : options.filter((option) => value.includes(option.value));

  useOutsideClick(containerRef, () => setIsFocused(false));

  const handleSelectClick = () => {
    setIsFocused(true);

    if (onSearch !== null) {
      inputRef.current.focus();
    }
  };

  const handleItemSelect = (itemValue) => {
    if (isMultipleMode) {
      const existingValueIndex = value.findIndex(
        (existingValue) => existingValue === itemValue
      );

      if (existingValueIndex !== -1) {
        removeSelectedItem(existingValueIndex);
        return;
      }

      itemValue = [...value, itemValue];
    }

    setQuery("");
    onChange(itemValue);

    setStoredSelectedOptions(
      options.filter((option) =>
        isMultipleMode
          ? value.includes(option.value)
          : option.value === itemValue
      )
    );
  };

  const removeSelectedItem = (index) => {
    if (isMultipleMode) {
      let tempValues = [...value];
      tempValues.splice(index, 1);
      onChange(tempValues);
      return;
    }

    onChange("");
  };

  const inputStyle = {
    width: getInputWidth(query, containerRef) + "px",
  };

  let selectStyle = "wau-select";

  if (isFocused) {
    selectStyle += " wau-select--focused";
  }

  const handleQueryChange = async (query) => {
    setQuery(query);
    await onSearch(query);
  };

  useEffect(() => {
    setStoredSelectedOptions(
      options.filter((option) =>
        isMultipleMode ? value.includes(option.value) : option.value === value
      )
    );
  }, []);

  const selectOptions = getSelectOptions(
    storedSelectedOptions,
    options,
    (option) => ({
      onClick: () => handleItemSelect(option.value),
    })
  );

  return (
    <div ref={containerRef}>
      <Dropdown options={selectOptions}>
        {(onToggle) => (
          <div
            className={selectStyle}
            onClick={() => {
              handleSelectClick();
              onToggle();
            }}
          >
            <div className="wau-select__tags">
              {isMultipleMode &&
                selected.map((option, index) => (
                  <Tag
                    label={option.label}
                    onClose={() => removeSelectedItem(index)}
                  />
                ))}
            </div>
            {onSearch === null ? (
              <div
                className={clsx("wau-select__label", {
                  "wau-select__label--placeholder":
                    isMultipleMode || selected === undefined,
                })}
              >
                {selected === undefined ||
                (isMultipleMode && value.length === 0)
                  ? placeholder
                  : !isMultipleMode
                  ? selected.label
                  : ""}
              </div>
            ) : (
              <div className="wau-select__wrapper">
                {!isMultipleMode && (
                  <div
                    className={clsx("wau-select__placeholder", {
                      "wau-select__placeholder--value":
                        selected !== undefined && !isFocused,
                    })}
                  >
                    {query.length > 0
                      ? ""
                      : selected !== undefined
                      ? selected.label
                      : !isFocused
                      ? placeholder
                      : ""}
                  </div>
                )}
                <input
                  className="wau-select__input"
                  type="text"
                  ref={inputRef}
                  style={inputStyle}
                  value={query}
                  onChange={(evt) => handleQueryChange(evt.target.value)}
                />
              </div>
            )}

            <div className="wau-select__indicator">
              {isFocused ? (
                <i className="fa fa-angle-up"></i>
              ) : (
                <i className="fa fa-angle-down"></i>
              )}
            </div>
          </div>
        )}
      </Dropdown>
    </div>
  );
}
