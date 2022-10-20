import React, { useState } from "react"
import { useRouter } from "next/router"
import Cookie from "universal-cookie"
import { PROPS_AUTHEN, PROPS_NAME, PROPS_PROFILE } from "types";

const cookie = new Cookie();

const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState<boolean>(true);

const login = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/authen/jwt/create/`,
        {
          method: 'POST',
          body: JSON.stringify({ email: email, password: password }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.status === 400) {
          throw 'authentication failed';
        } else if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const options = { path: '/' };
        cookie.set('access_token', data.access, options);
      });
    } catch (err) {
      alert(err);
    }
};
export default login;