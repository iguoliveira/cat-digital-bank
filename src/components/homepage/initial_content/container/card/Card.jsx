export const Card = (props) => {
    return(
        <div className="bg-white w-2/12 p-3 rounded">
            <div className="bg-gray-300 rounded flex flex-col items-center">
                <div><img src={props.image} /></div>
                <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold">{props.title}</div>
                    <div className="text-center">{props.content}</div>
                </div>
            </div>
        </div>
    )
}