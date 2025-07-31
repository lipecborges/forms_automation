export function toSapOdataDate(dateStr: string): string {
    // dateStr: "2025-07-28"
    const [year, month, day] = dateStr.split('-').map(Number);
    // Mês no JS começa do zero!
    const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
    const timestamp = date.getTime();
    return `/Date(${timestamp})/`;
}