export default function reducer(state, action) {
    switch (action.type) {

        case "inputUpdate":
            return {...state, inputValue: action.payload};

        case "AddCandidate":
            if (!action.payload.trim()) {
                return {...state, inputValue: ""};
            }
            return {...state, candidates: [...state.candidates,
                    {
                    id: state.candidates.length + 1,
                    name: action.payload,
                    votes: 0,
                    }
                ],
                inputValue: "" };

        case "addVote":
            const addVoteList = state.candidates.map((c) => {
                if (c.id === action.payload.id) {
                    return {...c, votes: c.votes + 1}
                }
                return c;})
            return {...state, candidates: addVoteList}

        case "removeVote":
            const removeVoteList =  state.candidates.map((c) => {
                if (c.id === action.payload.id) {
                    return {...c, votes: c.votes ? c.votes - 1 : c.votes}
                }
                return c;})
            return {...state, candidates: removeVoteList };

        case "resetVotes":
            const resetList = state.candidates.map((c) => {return {...c, votes: 0}})
            return {...state, candidates: resetList};

        case "dataReceived":
            return {...state, candidates: action.payload, status: "ready"};

        case "dataFailed":
            return {...state, status: "error"};
    }
}