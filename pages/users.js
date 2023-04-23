export default function Blog({ users }) {
    return (
      <>
      <h1>Employee List</h1>
      <ul>
        {users.map((users) => (
          <li>{users.EMP_Name}</li>
        ))}
      </ul>
      </>
      
    )
  }
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://laravel.shekharkhise.in/api/getAllUsers`);
    const users = await res.json()
  
    // Pass data to the page via props
    return { props: { users } }
  }