{
    const loadedValue: string | null = localStorage.getItem('sessionsList');
    const sessionsList: Date[] = (loadedValue) ? JSON.parse(loadedValue) as Date[] : [];
    sessionsList.push(new Date());
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
}