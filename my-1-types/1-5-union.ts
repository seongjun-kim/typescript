{
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
  //   const tile: TileSize = 18;

  // [예제] 로그인 함수: 성공(success) or 실패(fail)
  // [my code]
  //   type response = "success" | "fail";
  //   function login(id: string, pw: string): response {
  //     if (id && pw) return "success";
  //     return "fail";
  //   }
  // [ellie's code]
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  //   function login(id: string, pw: string): Promise<LoginState> {
  function login(isLogin: boolean): LoginState {
    if (isLogin) {
      return {
        response: {
          body: "LOGGED IN",
        },
      };
    }
    return {
      reason: "NETWORK ERROR",
    };
  }
  //   console.log(login(true));
  //   console.log(login(false));

  //   function printLoginState(state: LoginState): void {
  function printLoginState(state: LoginState) {
    // if (state?.response) console.log(`🎉${state.response.body}`); // FailState에는 response키가 없다...
    if ("response" in state) console.log(`🎉${state.response.body}`);
    // 특정 키를 찾아내는 위 조건문 개선이 필요하다 => Discriminated Union
    else console.log(`😭${state.reason}`);
  }

  printLoginState(login(true));
  printLoginState(login(false));
}
