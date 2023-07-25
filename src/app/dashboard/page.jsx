"use client"
import Link from "next/link";
import web3 from "../web3";

export default async function dashboard() {
    // const accounts = await web3.eth.requestAccounts();
    
    // web3.eth.getAccounts().then(console.log)
    return <div>
        <Link href={"dashboard/new-patient"}>New patient</Link>
        <Link href={"dashboard/patient"}>Exisiting patient</Link>
    </div>
} 