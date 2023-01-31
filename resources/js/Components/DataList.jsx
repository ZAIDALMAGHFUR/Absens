const DataList = () => {
    return (

        <div className='xl:m-[5rem]'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="col" className="px-6 py-3 border">No</th>
                            <th scope="col" className="px-6 py-3 border">Name</th>
                            <th scope="col" className="px-6 py-3 border">Email</th>
                            <th scope="col" className="px-6 py-3 border">No.Telphone</th>
                            <th scope="col" className="px-6 py-3 border">Role</th>
                            <th scope="col" className="px-6 py-3 border">Jabatan</th>
                            <th scope="col" className="px-6 py-3 border">Edit</th>
                            <th scope="col" className="px-6 py-3 border">Delete</th>
                        </tr>
                    </thead>
                    {props.user ? props.user.map((data, i) => {
                        return (
                            <tbody key={i}>
                                <tr className="bg-white dark:bg-gray-800" key={i}>
                                    <td className="px-6 py-4 border">{i + 1}</td>
                                    <td className="px-6 py-4 border-b">{data.name}</td>
                                    <td className="px-6 py-4 border-b">{data.email}</td>
                                    <td className="px-6 py-4 border-b">{data.phone}</td>
                                    <td className="px-6 py-4 border-b">
                                        {props.role ? props.role.map((data2, i) => {
                                            return (
                                                <>
                                                    {
                                                        data.role_id == data2.id ? data2.name : ""
                                                    }
                                                </>
                                            )
                                        }) : ""}
                                    </td>
                                    <td className="px-6 py-4 border-b">

                                        {props.positions ? props.positions.map((data3, i) => {
                                            return (
                                                <>
                                                    {
                                                        data.position_id == data3.id ? data3.name : ""
                                                    }
                                                </>
                                            )
                                        }) : ""}

                                    </td>
                                    <td className="px-6 py-4 border-b">
                                        <Link href={`/editkariawan/${data.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 border-b">
                                        <Delete URL={'/deletekariawan'} id={data.id} />
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }) : ""}
                </table>


            </div >
        </div >
    )
}