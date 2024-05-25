import { clsx } from 'clsx';

type BarProps = {
    percentage: number,
    color: string,
}

const Bar = (props: BarProps) => {
    const { percentage, color } = props;

    const barStyle = {
        height: `${percentage}%`
    }

    const barBgClasses: Record<string, string> = {
        'green': 'bg-green-500',
        'red': 'bg-red-500',
        'default': 'bg-secondary'
    }

    return (
        <div className='h-40 flex items-end justify-end'>
            <div className={clsx(barBgClasses[color], 'w-14 rounded-md')} style={barStyle}></div>
        </div>
    )
};

export default Bar;