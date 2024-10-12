export const CreateUrlForEvent = (date: Date, name: string) => {
    const formattedTime = date.toISOString();

    const encodedEventName = encodeURIComponent(name);

    //change 'onboarding-quest' for real url on api
    const url = `https://onboarding-quest.com/event?name=${encodedEventName}&time=${formattedTime}`;

    return url;
}