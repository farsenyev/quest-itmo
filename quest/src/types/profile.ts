import { UserInfo } from "@vkontakte/vk-bridge";

type UserRole = "STUDENT" | "EMPLOYEE";

type TUser = {
    role: UserRole;
    verified: boolean;
    tokenAmount: number;
};

type TProfile = TUser & UserInfo;

export type { TProfile };
