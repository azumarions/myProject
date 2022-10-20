import Cookie from "universal-cookie"
import { PROPS_NAME } from "types";

const cookie = new Cookie();


const createProf = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/profile/`,
        {
          method: 'POST',
          body: JSON.stringify({ name: 'user' }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${cookie.get("access_token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 401) {
          throw 'JWT Token not valid';
        } else if (res.ok) {
          return res.json();
        }
      });
    } catch (err) {
      alert(err);
    }
};

export default createProf;