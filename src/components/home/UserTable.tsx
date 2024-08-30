import React, { useState, useEffect } from "react";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

import apiRequest from "@/utils/api";

const COLUMN_LIST = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "username",
    label: "Username",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phone",
    label: "Phone",
  },
];

type ColumnLabel = typeof COLUMN_LIST[number]["label"];

// LABEL_MAP의 타입을 ColumnLabel을 키로 사용하도록 정의합니다.
const LABEL_MAP: Record<ColumnLabel, string> = {
  ID: "아이디",
  Username: "사용자",
  Email: "이메일",
  Phone: "휴대폰",
};

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    let unmount = false;
    setUsername("123");
    /*
      async/await

비동기 로직. 네트워크로 API를 요청하고 싶어. 요청 보내고 응답이 올때 까지 대기해야하잖. 비효율적.
Promise. 이 함수는 나중 순위로 미루고, 다른거 먼저 수행할 수 있음.
async: 비동기 로직이 내포되어 있는 함수
await: 이 함수를 실행한 다음에, 이 다음 로직들은 나중 순위로 미뤄달라.

    */
    async function getUser() {
      setIsLoading(true);
      const user = await apiRequest("getUsers", undefined);

      /*
       만약, API 요청을 보내고 아직 응답 이후에 상태 변경까지 완료가 되지 않았는데,
      해당 컴포넌트가 DOM에서 빠졌는데도 unmount. setUsers가 실행되면 의도치 않은 렌더링을 불러올 수 있다.
      useEffect내에서 비동기 요청할거면 unmount시엔 상태변경 안하게 필요하다.
       */
      if(unmount) false;
      setUsers(user);
      setIsLoading(false);
    }

    getUser();

    return () => {
      // useEffect return: cleanUp: 컴포넌트가 DOM에서 unmount되거나, 모든 Render flow가 수행 된 이후에 실행되는 함수.
      unmount = true;
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="p-4">
      <Table>
        <TableHeader columns={COLUMN_LIST}>
          {(column) => <TableColumn key={column.key}>{LABEL_MAP[column.label]}</TableColumn>}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody >
      </Table>
      <p className="text-3xl font-bold">
        {username}
      </p>
    </section>
  );
};

export default UserTable;