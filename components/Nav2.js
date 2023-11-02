import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/drop.module.css";
import { BiSolidUser} from "react-icons/bi";
import Logoutbutton from "./Logoutbutton";
import { useRouter } from "next/router";
import supabase from "@/config/supabaseClient";
function Nav2() {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const { data, error } = await supabase
        .from("signup")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching car details:", error);
        setUser(null);
      }

      if (data) {
        setUser(data);
      }
    };

    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div>
    {user?(
      <div className={styles.drop}>
      <div className={styles.dropdown} ref={menuRef}>
        <div className={styles.dropbtn} onClick={(e) => setOpen(!open)}>
          <BiSolidUser />
        </div>
        {open && (
          <ul className={styles.dropcont}>
            <li>
              <Link
                className={styles.links}
                href="/userinfo/[id]"
                as={`/userinfo/${user.id}`}
              >
                Profile Info
              </Link>
            </li>
            <li>
              <Link className={styles.links} href="/">
                Rent History
              </Link>
            </li>
            <li>
              <Link className={styles.links} href="/">
                Vouchers
              </Link>
            </li>
          </ul>
        )}
      </div>
      <Logoutbutton />
    </div>
     ) : (
      <p>Loading car details...</p>
    )}
    </div>
  );
}

export default Nav2;
