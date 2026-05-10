interface Props {
    page: number;
    totalPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({page, totalPage, onPageChange}: Props) {

    const pageCount = 10;
    const currentPage = page;
    const totalPageList = Math.ceil(totalPage / pageCount);

    let pageList = Math.ceil(currentPage / pageCount);

    if (pageList < 1) {
        pageList = 1;
    }

    if (pageList > totalPageList) {
        pageList = totalPageList;
    }

    let startPage = (pageList - 1) * pageCount + 1;

    let endPage = startPage + pageCount - 1;

    if (endPage > totalPage) {
        endPage = totalPage;
    }

    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const prevPage = startPage > 1 ? startPage - 1 : 1;

    const nextPage = endPage < totalPage ? endPage + 1 : totalPage;

    return (
        <div className="pagination">
            <button
                className="page"
                onClick={() => onPageChange(prevPage)}
                disabled={page === 1}
            >{"<"}
            </button>
            {
                pageNumbers.map((p) => (
                    <button
                        key={p}
                        className={page === p ? "page active" : "page"}
                        onClick={() => onPageChange(p)}
                    >
                        {p}
                    </button>
                ))
            }
            <button
                className="page"
                onClick={() => onPageChange(nextPage)}
                disabled={page === totalPage}
            >
                {">"}
            </button>
        </div>
    );
}