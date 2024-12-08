
interface ButtonProps{
    onClick: () => void;
}

function Button ({onClick}: ButtonProps){
    return (
        <>
        <button onClick={onClick}>vuelta</button>
        </>
    )
}

export default Button