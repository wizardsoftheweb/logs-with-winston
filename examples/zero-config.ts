import { Logger } from "winston";

import { LogsWithWinston } from "@wizardsoftheweb/logs-with-winston";

@LogsWithWinston()
class Foo {
    constructor() {
        // do nothing
    }
}

const example = new Foo();
(example as any).logger instanceof Logger;
// true