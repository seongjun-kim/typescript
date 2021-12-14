{
  // Discrimated Union Type
  // 기존 union type인 SuccessState, FailState에
  // 공통적인 속성(property)인 'result'를 넣음으로써
  // 두 상태 타입이 구분(discriminated)된다.
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(isLogin: boolean): LoginState {
    if (isLogin) {
      return {
        result: "success",
        response: {
          body: "LOGGED IN",
        },
      };
    }
    return {
      result: "fail",
      reason: "NETWORK ERROR",
    };
  }

  function printLoginState(state: LoginState) {
    // if ("response" in state) console.log(`🎉${state.response.body}`);
    // else console.log(`😭${state.reason}`);

    if (state.result === "success") console.log(`🎉${state.response.body}`);
    else console.log(`😭${state.reason}`);
  }

  printLoginState(login(true));
  printLoginState(login(false));
}
