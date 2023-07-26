import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
export default async function dashboard() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <div>
          <Link href={"dashboard/new-patient"}>New patient</Link>
          <Link href={"dashboard/patient"}>Exisiting patient</Link>
        </div>
      ) : (
        <h1>LOGIN FIRST</h1>
      )}
    </>
  );
}
