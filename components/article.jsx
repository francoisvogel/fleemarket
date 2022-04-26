export default function Article(props) {
    return (
        <div className="grid place-items-center p-2 m-3 rounded-lg bg-gray-200 w-11/12 lg:w-1/2">
            <p className="text-xl lg:text-2xl">{props.title} <span className="text-base">({props.date})</span></p>
            <p className="text-sm">{props.content}</p>
        </div>
    )
}