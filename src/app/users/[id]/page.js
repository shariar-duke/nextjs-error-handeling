export default function UserDetailsPage({ params: { id } }) {
  return (
    <div className="p-2">
      <h1 className="text-3xl my-2"> User Details Page </h1>
      <p>{UserDetailsPage?.name}</p>
      <p>{UserDetailsPage?.email}</p>
    </div>
  );
}
