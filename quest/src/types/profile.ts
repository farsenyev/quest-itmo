import { UserInfo } from "@vkontakte/vk-bridge";

enum UserRole {
    "STUDENT",
    "EMPLOYEE",
}

type TUser = {
    role: UserRole;
    verified: boolean;
};

type TProfile = TUser & UserInfo;

export type { TProfile };
