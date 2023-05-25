export default interface Page<T> {
    records: T[];
    currentPage: number;
    totalPages: number;
    perPage: number;
}