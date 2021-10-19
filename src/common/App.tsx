import React from "react";
import { Environment, RelayEnvironmentProvider } from "react-relay";
import { History, HistoryContext } from "../core/history";
import { LoginDialog } from "../dialogs/LoginDialog";
import { useCurrentUser } from "../hooks/useCurrentUser";

type AppProps = {
  history: History;
  relay: Environment;
};

export class App extends React.Component<AppProps> {
  render(): JSX.Element {
    const { history } = this.props;

    return (
      <>
        <RelayEnvironmentProvider environment={this.props.relay}>
          <HistoryContext.Provider value={history}>
            <LoginDialog />
          </HistoryContext.Provider>
        </RelayEnvironmentProvider>
      </>
    );
  }
}
