import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
const LoginAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (e) => {
      if (e !== "SIGNED_OUT") {
        navigate("/success");
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="login">
      <header className="Login-header">
        <Auth
          supabaseClient={supabase}
          providers={["discord"]}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      </header>
    </div>
  );
};
export default LoginAuth;
