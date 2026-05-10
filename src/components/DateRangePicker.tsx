interface Props {
    startDate: string;
    endDate: string;
    onChange: (name: string, value: string) => void;
}

export default function DateRangePicker({startDate, endDate, onChange}: Props) {

    return (
        <div>
            <input
                type="date"
                value={startDate}
                onChange={(e) => onChange("startDate", e.target.value)}
            />
            <span> ~ </span>
            <input
                type="date"
                value={endDate}
                onChange={(e) => onChange("endDate", e.target.value)}
            />
        </div>
    );
}