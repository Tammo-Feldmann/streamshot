import { Subject } from "rxjs";

const subject = new Subject();

const initialState = { status: "", data: [], newCount: 0, message: '', error: "" } as any;

interface IDataEntry {
    person: string;
    text: string;
}

interface IStoreProps {init: any, subscribe: (state: any) => void, sendMessage: (message: string) => void, clearChat: any, initialState: any }

let state = initialState;

const chatStore:IStoreProps = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    sendMessage: message => {
        state = {
          ...state,
          data: [...state.data, message],
          newDataCount: state.newDataCount + 1
        };
        subject.next(state);
      },
    clearChat: () => {
        state = initialState;
        subject.next(state);
    },
    initialState,
};

export default chatStore;
