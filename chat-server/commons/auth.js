const {
  getUserWithCredentials,
  addUser,
  getLogin,
} = require("../routes/login");

const auth = {
  login: async ({ nickname }) => {
    const respositoryResult = await getUserWithCredentials({
      nickname,
    });

    if (!respositoryResult.result) {
      return {
        result: false,
        message: `Login failed`,
        data: [],
      };
    }

    return {
      result: true,
      message: `Login successfully`,
      data: [respositoryResult.user],
    };
  },
  checkDuplication: async ({ nickname }) => {
    const data = await getLogin({
      nickname,
    });

    if (data.length > 0) {
      return {
        result: false,
        message: `Nickname is already used`,
        data: [],
      };
    }

    return {
      result: true,
      message: `Nickname is available`,
      data: [],
    };
  },
  join: async ({ nickname }) => {
    const respositoryResult = await addUser({
      nickname,
    });

    const newUser = await getLogin(nickname);

    return {
      result: true,
      message: respositoryResult.message,
      data: [newUser],
    };
  },
  info: async ({ nickname }) => {
    const data = await getLogin(nickname);

    if (!data.length === 0) {
      return {
        result: false,
        message: `User not found`,
        data: [],
      };
    }

    return {
      result: true,
      message: `Successfully found user`,
      data,
    };
  },
  authorizeUser: async ({ nickname, roleName }) => {
    const users = getLogin(nickname);

    if (users.length === 0) {
      return { data: [], message: "User not found", result: false };
    }

    const user = users[0];

    const userRoles = await authenticationRepository.getUserRoleByName(
      user.id,
      roleName
    );

    if (userRoles.length === 0) {
      return { data: [], message: "User is not authorized", result: false };
    }

    return {
      data: [user[0]],
      message: `User is authorized with role ${roleName}`,
      result: true,
    };
  },
};

// module.exports = authenticationService;
