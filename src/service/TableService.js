export const tableService = ({doGet, doPost}) => {

    const getAllTable = async () => {
        try {
            return await doGet({url: '/table'})
        } catch (e) {
            throw e
        }
    }

    const createTable = async (newTable) => {
        try {
            return await doPost({
                url: '/table/list',
                data: newTable
            })
        } catch (e) {
            throw e
        }
    }

    return {getAllTable, createTable}
}