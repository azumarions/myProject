import { useForm } from "react-hook-form";
import { Button, Input, Box } from "@mui/material";

export type SigninFormData = {
    email: string
    password: string
}

interface SigninFormProps {
    onSignin?: (email: string, password: string) => void
}

const SigninForm = ({ onSignin }: SigninFormProps) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<SigninFormData>()
    const onSubmit = (data: SigninFormData) => {
      const { email, password} = data
      onSignin && onSignin(email, password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <Input
                {...register('email', { required: true })}
                name='email'
                type='email'
                placeholder="api@gmail.com"
                />
                {errors.email && (
                    <p color="danger">
                        email is must
                    </p>
                )}
            </Box>
            <Box>
                <Input
                {...register('password', { required: true })}
                name='password'
                type='password'
                placeholder="api"
                />
                {errors.password && (
                    <p color="danger">
                        password is must
                    </p>
                )}
            </Box>
            <Button type="submit">
                Siginin
            </Button>
        </form>
    )
}

export default SigninForm