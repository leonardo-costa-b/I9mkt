'use client';

import clsx, { ClassValue } from 'clsx';
import { Check, ChevronDown, X } from 'lucide-react';
import { ChangeEvent, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

interface SelectInputProps {
    selectProps: {
        id: string;
        placeholder: string;
        register?: any;
        name?: string;
        fields: {
            id: string;
            name: string;
            Icon?: ReactNode;
        }[];
        onValue?: (value: string) => void;
        isFiltered?: boolean;
        required?: boolean;
        disabled?: boolean;
        clearValue?: boolean;
        loadingFields?: boolean;
        defaultValue?: string;
        classNames?: ClassValue;
        onlyIcon?: boolean;
    };
    error?: {
        show: boolean;
        message?: string;
    };
}

export function SelectInput({ selectProps, error }: SelectInputProps) {
    const [search, setSearch] = useState('');
    const [shouldShowOptions, setShouldShowOptions] = useState(false);
    const [selectValue, setSelectValue] = useState<string[]>(
        selectProps.defaultValue ? [selectProps.defaultValue] : [],
    );

    const optionsContainerRef = useRef<HTMLUListElement>(null);
    const selectedField = selectProps.fields.find((field) => selectValue.includes(field.id));

    const filteredFields = useMemo(() => {
        if (!search) return selectProps.fields;
        return selectProps.fields.filter((field) =>
            field.name.toLowerCase().includes(search.toLowerCase()),
        );
    }, [search, selectProps.fields]);

    function handleOptionSelect(
        field: (typeof selectProps.fields)[0],
        e: ChangeEvent<HTMLInputElement>,
    ) {
        if (e.target.checked) {
            setSelectValue((prev) => [...prev, field.id]);
            setShouldShowOptions(false);
            selectProps.onValue?.(selectValue.join(', '));
            selectProps.register?.onChange?.(e);
        }
    }

    function handleOptionDeselect(field: string) {
        setSelectValue((prev) => prev.filter((id) => id !== field));
    }

    useEffect(() => {
        if (selectProps.isFiltered) {
            const handleClickOutside = (e: MouseEvent) => {
                if (!optionsContainerRef.current?.contains(e.target as Node)) {
                    setShouldShowOptions(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);

            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    useEffect(() => {
        if (selectProps.clearValue) {
            setSelectValue([]);
        }
    }, [selectProps.clearValue]);

    return (
        <>
            <div className="relative mt-1">
                <div
                    className={clsx('relative', {
                        'cursor-no-drop': selectProps.disabled,
                    })}
                >
                    <div className="flex w-full items-center justify-between">
                        <input
                            {...selectProps.register}
                            id={selectProps.id}
                            type="text"
                            className={clsx(
                                'h-10 w-full rounded-lg border px-4 text-sm text-transparent shadow-2xl shadow-black/10 outline-0 placeholder:text-gray-400 focus:border-sky-500 disabled:cursor-no-drop disabled:bg-gray-300 disabled:opacity-50',
                                {
                                    'border-red-600': error,
                                    'border-gray-300': !error,
                                },
                            )}
                            onChange={(e) => {
                                setSelectValue([e.target.value]);
                                setSearch(e.target.value);
                            }}
                            onClick={() =>
                                !selectProps.disabled &&
                                selectProps.isFiltered &&
                                setShouldShowOptions(!shouldShowOptions)
                            }
                            value={selectValue.join(', ')}
                            placeholder={selectProps.placeholder}
                            autoComplete="off"
                            disabled={selectProps.disabled}
                        />

                        <button
                            type="button"
                            className={clsx(
                                'flex w-full cursor-pointer items-center justify-between rounded-lg px-4 text-sm',
                                {
                                    '': selectProps?.isFiltered,
                                    'absolute inset-0 z-10': !selectProps?.isFiltered,
                                    [`${selectProps.classNames}`]: selectProps?.classNames,
                                },
                            )}
                            onClick={() => setShouldShowOptions(!shouldShowOptions)}
                        >
                            {selectValue.length === 0 ? (
                                <span>{selectProps.placeholder}</span>
                            ) : (
                                <span className="flex flex-1 gap-2">
                                    {selectProps.onlyIcon ? (
                                        selectedField?.Icon
                                    ) : (
                                        <>
                                            {selectedField?.Icon}
                                            {selectedField?.name}
                                        </>
                                    )}
                                </span>
                            )}
                            {!selectProps.onlyIcon && (
                                <ChevronDown
                                    size={20}
                                    className={clsx(
                                        'rotate-0 transition-all duration-100 ease-linear',
                                        {
                                            'rotate-180': shouldShowOptions,
                                        },
                                    )}
                                />
                            )}
                        </button>
                    </div>

                    {error?.message && (
                        <span className="absolute -bottom-5 left-3 text-xs text-red-500">
                            {error.message}
                        </span>
                    )}
                </div>

                <ul
                    ref={optionsContainerRef}
                    className={clsx(
                        'absolute right-0 z-10 mt-2 min-w-[172px] overflow-auto rounded-lg bg-slate-700 opacity-0 shadow-2xl shadow-black/10 transition-all duration-100 ease-linear',
                        {
                            invisible: !shouldShowOptions,
                            'visible max-h-96 opacity-100': shouldShowOptions,
                            'w-max': selectProps.onlyIcon,
                            'w-full': !selectProps.onlyIcon,
                        },
                    )}
                >
                    {filteredFields.map((field) => (
                        <li
                            key={field.id}
                            className={clsx(
                                'flex items-center border-b border-slate-500 last:border-0',
                                {
                                    'bg-slate-600': selectValue.includes(field.id),
                                },
                            )}
                        >
                            <input
                                type="radio"
                                id={field.id}
                                name={selectProps.name}
                                value={field.id}
                                className="absolute inset-0 cursor-pointer [all:unset]"
                                {...selectProps.register}
                                onChange={(e) => handleOptionSelect(field, e)}
                                autoComplete="off"
                            />

                            <label
                                htmlFor={field.id}
                                className={clsx(
                                    'w-full cursor-pointer px-2 py-3 text-sm capitalize',
                                    {
                                        'flex items-center gap-2': field.Icon,
                                    },
                                )}
                            >
                                {field?.Icon && field.Icon}
                                {field.name}
                            </label>

                            <Check
                                size={16}
                                className={clsx('mr-4', {
                                    hidden: !selectValue.includes(field.id),
                                    block: selectValue.includes(field.id),
                                })}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {selectValue.length > 0 && (
                <ul className="grid max-h-28 grid-cols-3 gap-2 overflow-y-auto pt-4">
                    {selectValue.map((field) => (
                        <li
                            key={field}
                            className="flex items-center justify-between gap-4 rounded-full bg-slate-500 p-2"
                            title={field}
                        >
                            <span className="block max-w-32 overflow-hidden text-xs text-ellipsis whitespace-nowrap">
                                {field}
                            </span>

                            <button
                                type="button"
                                className="cursor-pointer"
                                onClick={() => handleOptionDeselect(field)}
                            >
                                <X size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
