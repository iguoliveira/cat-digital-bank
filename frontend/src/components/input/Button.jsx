export const Button = ({ onclick, children }) => {
    return(
        <button className="bg-mainBrandColor-1000 p-2 text-white rounded shadow-mainBrandColor-500 shadow-md active:shadow-black active:shadow-inner uppercase text-lg w-full" onClick={onclick}>{children}</button>
    )
}