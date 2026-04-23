// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function FormField({id, label,description, required = true, children}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-[14px] font-medium text-[#2f2f2f] leading-[1.4]"
            >
                {label}
                {required && <RequiredStar />}
            </label>

            {description && (
                <p className="text-[12px] text-[#6b6f76] leading-[1.45]">
                    {description}
                </p>
            )}

            {children}
        </div>
    );
}

function RequiredStar() {
    return <span className="text-red-500 ml-1">*</span>;
}