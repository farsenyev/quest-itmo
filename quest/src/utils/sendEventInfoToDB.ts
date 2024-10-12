export const sendEventInfoToDB = (date: Date, name: string, descr: string, url: string) => {
    const eventInfo = {
        id: 10000,
        authorId: 10000,
        title: name,
        description: descr,
        date,
        url: url
    }

    //TODO: write request to qpi for create qpi
    localStorage.setItem('event', JSON.stringify(eventInfo))
}
