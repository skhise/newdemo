export default function users({ users }) {
    return (
      <div>
      <h1>Employee List</h1>
      <table>
        <tr>
          <th><p>Name</p></th>
          <th><p>Email</p></th>
          <th><p>Mobile</p></th>
        </tr>
        <tbody>
        {users.map((users) => (
          <tr>
            <td><p>{users.EMP_Name}</p></td>
            <td><p>{users.EMP_Email}</p></td>
            <td><p>{users.EMP_MobileNumber}</p></td>
          </tr>
        ))}
        </tbody>
      </table>
      
      </div>
      
    )
  }
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://laravel.shekharkhise.in/api/getAllUsers`);
    const users = await res.json()
  
    // Pass data to the page via props
    return { props: { users } }
  }