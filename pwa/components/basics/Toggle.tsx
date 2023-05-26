import React from "react";

interface ToggleProps {
  onChange: (checked: boolean) => void;
  defaultToggled?: boolean;
}

function Toggle({ onChange, defaultToggled }: ToggleProps) {
  return (
    <label
      htmlFor="AcceptConditions"
      className="relative h-8 w-14 cursor-pointer"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        defaultChecked={defaultToggled}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only [&:checked_+_span_svg[data-unchecked-icon]]:hidden [&:checked_+_span_svg[data-checked-icon]]:block"
      />

      <span className="absolute inset-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition peer-checked:translate-x-6 peer-checked:text-green-600">
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="hidden h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-primary"></span>
    </label>
  );
}

export default Toggle;
