import React from 'react';
import Chip from './Chip';

export const TableHead = ({ headers }) => (
    <thead>
        <tr>
            {
                headers.map((header, index) => (
                    <th key={`th-${index}`}>{header}</th>
                ))
            }
        </tr>
    </thead>
);

export const TableBody = ({ fields, items }) => (
    <tbody>
        {
            items.map((item, i) => (
                <tr key={`tr-${i}`}>
                    {
                        fields.map((field, j) => {
                            if (field === 'status') {
                                // Special row (with chip)
                                return (
                                    <td key={`td-${i}-${j}`}>
                                        <Chip state={item[field]} />
                                    </td>
                                );
                            } else {
                                // Normal row
                                return (
                                    <td key={`td-${i}-${j}`}>
                                        {item[field]}
                                    </td>
                                );
                            }
                        })
                    }
                </tr>
            ))
        }
    </tbody>
);

const Table = ({ headers, fields, items }) => (
    <table>
        <TableHead headers={headers} />
        <TableBody fields={fields} items={items} />
    </table>
);

export default Table;
