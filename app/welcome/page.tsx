export default function Welcome() {
    return (
        <div>
            <h1>hello welcome to railfeast</h1>
        </div>
    )
}

export function Apple() {
    return (
        <div>
            <button>
                login
            </button>
        </div>
    )
}

export function Mango(prop: { name: string, id: number }) {
    return (
        <div>
            <h1> hello {prop.name}
                ur id is{prop.id}
            </h1>
        </div>
    )
}

export function Grapes({ name, id }: { name: string, id: number }) {
    return (
        <h1> ur name is {name} and ur id is {id}</h1>
    )
}

export function Oranges({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick}>
            click here to see ur name

        </button>
    )
}

export function Banana({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick}>   click here </button>
    )

}


