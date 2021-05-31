import { studentList } from './list';

<table>
  <tr>
    <th>Students</th>
    <th>Group 1</th>
    <th>Group 2</th>
  </tr>
  {studentList.map((s) => (
    <tr>
      <td>{s.name}</td>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>
        <input type="checkbox"></input>
      </td>
    </tr>
  ))}
</table>;
