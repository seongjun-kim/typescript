{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(data: ResourceLoadState) {
    const { state } = data;
    switch (state) {
      case "loading":
        // console.log("👀 loading...");
        console.log(`👀 ${state}`);
        break;
      case "success":
        // console.log("😃 loaded");
        console.log(`😃 ${data.response.body}`);
        break;
      case "fail":
        // console.log("😱 no network");
        console.log(`😱 ${data.reason}`);
        break;
      default:
        throw new Error("Unknown Error");
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
