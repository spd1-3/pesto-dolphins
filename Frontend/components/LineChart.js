import { useMemo } from 'react'
import { Line } from 'react-chartjs-2';
function LineChart ({ data, options }) {
    return (
        <Line
            data={ data }
            options={ options }
        />
    )
}
export default LineChart
