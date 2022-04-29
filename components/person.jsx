export default function Person(props) {
    return (
        <div className="p-3 m-5 rounded bg-gradient-to-br from-blue-300 to-blue-500">
            <p><span className="font-bold">{props.title}:</span> {props.name}</p>
            <p><span className="italic">Email:</span> {props.email}</p>
            <p><span className="italic">Tel.:</span> {props.tel}</p>
        </div>
    )
}