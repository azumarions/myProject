import { ApiContext, User } from "types";
import { fetcher } from "utils";

export type SigninParams = {
    email: string
    password: string
}

const signin = async (
    context: ApiContext,
    params: SigninParams,
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl}/api/register`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        },
    )
}

export default signin