import Link from "next/link";

export default function Blog({ users }) {
    return (
      <>
      <h1>Employee List</h1>
      <Link href="/">Back</Link>
      <ul>
        {users.map((users) => (
          <li key={users.EMP_ID}>{users.EMP_Name}</li>
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