"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import InnerHeader from "../innerHeader/InnerHeader";

const Header = () => {
  const [displayName, setDisplayName] = useState("");
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          // 이메일로 로그인 했을 시
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          // 구글 로그인 시
          setDisplayName(user.displayName);
        }

        // 유저 정보를 리덕스 스토어에 저장
      } else {
        setDisplayName("");
        // 유저 정보를 리덕스 스토어에서 삭제
      }
    });
  }, []);

  const logoutUser = (e) => {
    signOut(auth)
      .then(() => {
        toast.success("로그아웃 되었습니다");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (
    pathName === "/login" ||
    pathName === "/register" ||
    pathName === "/reset"
  ) {
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/login"}>로그인</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/admin/dashboard"}>관리자</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/order-history"}>주문 목록</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              로그아웃
            </Link>
          </li>

          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              제휴 마케팅
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              쿠팡 플레이
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              고객센터
            </Link>
          </li>
        </ul>
      </div>
      {pathName.startsWith("/admin") ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
