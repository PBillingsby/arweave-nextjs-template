const functions = { click }

export function handle(state, action) {
    // Checks if action.input function is defined
    if (Object.keys(functions).includes(action.input.function)) {
        // Calls input function
        return functions[action.input.function](state, action)
    }
    throw new ContractError('function not defined!')
}

function click(state, action) {
    // Updates and returns new state
    state.clicks = state.clicks + 1;
    return { state }
}