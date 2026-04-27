import { useEffect, useMemo, useRef, useState } from "react";

type SearchableDropdownProps = {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    name?: string;
    id?: string;
};

export function SearchableDropdown({
                                       options,
                                       value,
                                       onChange,
                                       placeholder = "Kezdj el gépelni...",
                                       required = false,
                                       name,
                                       id,
                                   }: SearchableDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const uniqueOptions = useMemo(() => {
        return Array.from(new Set(options));
    }, [options]);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const filteredOptions = useMemo(() => {
        const search = inputValue.trim().toLowerCase();

        if (!search) {
            return uniqueOptions;
        }

        return uniqueOptions.filter((option) =>
            option.toLowerCase().includes(search)
        );
    }, [uniqueOptions, inputValue]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;

        setInputValue(newValue);
        onChange(newValue);
        setIsOpen(true);
    }

    function handleSelect(option: string) {
        setInputValue(option);
        onChange(option);
        setIsOpen(false);
    }

    return (
        <div className="relative" ref={wrapperRef}>
            <input
                id={id}
                name={name}
                type="text"
                value={inputValue}
                required={required}
                autoComplete="off"
                placeholder={placeholder}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                onClick={() => setIsOpen(true)}
                className="h-11 w-full rounded-md border border-[#d7dbe2] bg-white px-3 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
            />

            {isOpen && (
                <div className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-[#d7dbe2] bg-white shadow-lg">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <button
                                id={"btn-option"}
                                key={`${option}-${index}`}
                                type="button"
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    handleSelect(option);
                                }}
                                className="block w-full bg-white px-3 py-2 text-left text-[14px] text-[#1f1f1f] hover:bg-[#fafbfc]"
                            >
                                {option}
                            </button>
                        ))
                    ) : (
                        <div className="bg-white px-3 py-2 text-[14px] text-[#6b6f76]">
                            Nincs találat
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}