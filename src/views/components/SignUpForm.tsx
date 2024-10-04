import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { Avatar, Divider } from "@mui/joy";

export default function SignUpForm() {
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
          <b>Sign up!</b>
        </Typography>
      </div>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          // html input attribute
          name="text"
          type="text"
          placeholder="johndoe"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          // html input attribute
          name="password"
          type="password"
          placeholder="password"
        />
      </FormControl>
      <Button sx={{ mt: 1 /* margin top */ }}>Sign up</Button>
      <Typography
        endDecorator={<Link href="/sign-up">Login</Link>}
        sx={{ fontSize: "sm", alignSelf: "center" }}
      >
        Have an account?
      </Typography>
      <Divider />
      <Button
        variant="soft"
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
        Sign up with Google
      </Button>
    </Sheet>
  );
}
