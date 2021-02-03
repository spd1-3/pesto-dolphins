import { useMemo } from 'react'
import { useTable } from 'react-table'
import styles from '../styles/dashboard.module.css'

function DashboardLeaderboard() {
    const data = useMemo(() => [
        {
            rank: '1st',
            name: 'John Doe',
            points: '131',
        },
        {
            rank: '1st',
            name: 'John Doe',
            points: '131',
        },
        {
            rank: '1st',
            name: 'John Doe',
            points: '131',
        },
        {
            rank: '1st',
            name: 'John Doe',
            points: '131',
        },

    ], [])

    const columns = useMemo(() => [
        {
            Header: "Rank",
            accessor: "rank"
        },
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Points",
            accessor: "points"
        },
    ], [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } =  useTable({ columns, data })

    return (
        <div className={`${styles.leaderboardCard} blur`}>
            <table {...getTableProps()} className={styles.leaderboard}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className={`${styles.leaderboardHead}`}
                                >
                                    <h3>{column.render('Header')}</h3>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, index) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}
                                className={`${styles.leaderboardRow} ${index % 2 === 0 ? styles.bgWhite : ''}`}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardLeaderboard
