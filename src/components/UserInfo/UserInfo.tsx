import { User } from "../../types/user";

export const UserInfo: React.FC<User> = ({user}) => {
    return (
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
    )
};
