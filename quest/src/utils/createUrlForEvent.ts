export const CreateUrlForEvent = (startDate: Date, endDate: Date, name: string) => {
    const formattedStartTime = startDate.toISOString();
    const formattedEndTime = endDate.toISOString();

    const encodedEventName = encodeURIComponent(name);

    //change 'onboarding-quest' for real url on api
    const url = `https://onboarding-quest.com/event?name=${encodedEventName}&time=${formattedStartTime}-${formattedEndTime}`;

    return url;
}