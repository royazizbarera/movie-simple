import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { Avatar, Divider } from "@mui/joy";
import { useState } from "react";
import { useAuth } from "../../contexts/useAuth";

export default function LoginForm() {
  const { loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const handleGoogleLogin = () => {
    const currentUrl = window.location.href; // Dapatkan URL halaman saat ini
    window.open(
      `http://localhost:3001/api/v1/auth/google?redirectUrl=${encodeURIComponent(
        currentUrl
      )}`,
      "_self"
    );
  };

  const handleEmailPasswordLogin = async () => {
    try {
      await loginUser(
        email,
        password
      );
      setErrorLogin("");
    } catch (error: any) {
      setErrorLogin(
        error.message || "Terjadi kesalahan saat login. Coba lagi nanti."
      );
    }
  };

  return (
    <Sheet
      sx={{
        width: 300,
        mx: "auto", // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="outlined"
    >
      <div>
        <Typography level="h4" component="h1">
          <b>Welcome!</b>
        </Typography>
        <Typography level="body-sm">Login to continue.</Typography>
      </div>

      {errorLogin && (
        <Typography color="danger" sx={{ fontSize: "sm", mb: 2 }}>
          {errorLogin}
        </Typography>
      )}

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state
        />
      </FormControl>
      <Button onClick={handleEmailPasswordLogin} sx={{ mt: 1 }}>
        Login
      </Button>
      <Typography
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        sx={{ fontSize: "sm", alignSelf: "center" }}
      >
        Don&apos;t have an account?
      </Typography>
      <Divider />
      <Button
        variant="soft"
        onClick={handleGoogleLogin}
        startDecorator={
          <Avatar
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            sx={{
              backgroundColor: "common.white",
              height: "1.5rem",
              width: "1.5rem",
            }}
          />
        }
        sx={{
          backgroundColor: "common.white",
          color: "common.black",
        }}
      >
        Login with Google
      </Button>
    </Sheet>
  );
}
