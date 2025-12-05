'use client';

import clsx, { ClassValue } from 'clsx';
import { Check, ChevronDown } from 'lucide-react';
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
    const [selectValue, setSelectValue] = useState(selectProps.defaultValue ?? '');

    const optionsContainerRef = useRef<HTMLUListElement>(null);
    const selectedField = selectProps.fields.find((field) => field.id === selectValue);

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
            setSelectValue(field.id);
            setShouldShowOptions(false);
            selectProps.onValue?.(String(field.id));
            selectProps.register?.onChange?.(e);
        }
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
            setSelectValue('');
        }
    }, [selectProps.clearValue]);

    return (
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
                            setSelectValue(e.target.value);
                            setSearch(e.target.value);
                        }}
                        onClick={() =>
                            !selectProps.disabled &&
                            selectProps.isFiltered &&
                            setShouldShowOptions(!shouldShowOptions)
                        }
                        value={selectValue}
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
                        {selectValue === '' ? (
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
                    'absolute right-0 z-10 mt-2 min-w-[172px] overflow-hidden rounded-lg bg-white opacity-0 shadow-2xl shadow-black/10 transition-all duration-100 ease-linear',
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
                            'flex items-center border-b border-gray-200 last:border-0',
                            {
                                'bg-gray-50': selectValue === field.id,
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
                            className={clsx('w-full cursor-pointer px-2 py-3 text-sm capitalize', {
                                'flex items-center gap-2': field.Icon,
                            })}
                        >
                            {field?.Icon && field.Icon}
                            {field.name}
                        </label>

                        <Check
                            size={16}
                            className={clsx('mr-4', {
                                hidden: selectValue !== field.id,
                                block: selectValue === field.id,
                            })}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
