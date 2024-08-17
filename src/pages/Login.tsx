import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const login = () => {
  const [loginUser, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log("ERROR =>", error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging In");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await loginUser(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(`/${user.role}/dashboard`);
      toast.success("Successfully Logged In", { id: toastId, duration: 3000 });
    } catch (err) {
      toast.error("Something Went wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="userId" label="ID : " />

        <PHInput type="text" name="password" label="Password : " />

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default login;
