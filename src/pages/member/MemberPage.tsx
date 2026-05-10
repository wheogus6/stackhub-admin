import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import DateRangePicker from "../../components/DateRangePicker";

interface Member {
    memberCode: string;
    memberName: string;
    balance: number;
    regDate: string;
    status: string;
}

export default function MemberPage() {

    const [memberList, setMemberList] = useState<Member[]>([]);

    const [page, setPage] = useState(1);

    const [totalPage, setTotalPage] = useState(1);

    const [searchForm, setSearchForm]
        = useState({
        keyType: "",
        keyValue: "",
        startDate: "",
        endDate: ""
    });

    useEffect(() => {
        getMemberList();
    }, [page]);

    const getMemberList = async () => {

        try {
            setMemberList([
                {
                    memberCode: "M0001",
                    memberName: "홍길동",
                    balance: 10000,
                    regDate: "2026-05-10",
                    status: "정상"
                }
            ]);
            setTotalPage(5);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement
            >
    ) => {
        setSearchForm({
            ...searchForm,
            [e.target.name]:
            e.target.value
        });
    };

    const handleDateChange = (
        name: string,
        value: string
    ) => {

        setSearchForm({
            ...searchForm,
            [name]: value
        });
    };

    const handleSearch = () => {

        setPage(1);

        getMemberList();
    };

    return (
        <div className="member_con">
            <h4>회원관리</h4>
            <div className="member_list">
                <form>
                    <table className="top_tab">
                        <tbody>
                        <tr>
                            <th>검색</th>
                            <td>
                                <select
                                    name="keyType"
                                    value={searchForm.keyType}
                                    onChange={handleSearchChange}
                                >
                                    <option value="">선택</option>
                                    <option value="name">이름</option>
                                    <option value="mobileNo">연락처</option>
                                </select>
                                <input
                                    type="text"
                                    name="keyValue"
                                    value={searchForm.keyValue}
                                    onChange={handleSearchChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>기간 설정</th>
                            <td>
                                <DateRangePicker
                                    startDate={searchForm.startDate}
                                    endDate={searchForm.endDate}
                                    onChange={handleDateChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="search">
                                <button
                                    id="search_bt"
                                    type="button"
                                    onClick={handleSearch}>검색
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <table className="bottom_tab">
                    <thead>
                        <tr>
                            <th>회원코드</th>
                            <th>이름</th>
                            <th>잔액</th>
                            <th>등록일자</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        memberList.length > 0 ? (
                            memberList.map(member => (
                                <tr key={member.memberCode}>
                                    <td>
                                        {member.memberCode}
                                    </td>
                                    <td>
                                        {member.memberName}
                                    </td>
                                    <td>
                                        {member.balance}
                                    </td>
                                    <td>
                                        {member.regDate}
                                    </td>
                                    <td>
                                        {member.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>
                                    내역이 없습니다.
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <Pagination
                    page={page}
                    totalPage={totalPage}
                    onPageChange={setPage}
                />
            </div>

        </div>
    );
}