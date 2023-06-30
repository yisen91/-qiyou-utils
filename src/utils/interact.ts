export const interact = {
    loadComplete: () => {
        window.mbQuery?.(0, '{"func": "LoadComplete"}')
    }
}