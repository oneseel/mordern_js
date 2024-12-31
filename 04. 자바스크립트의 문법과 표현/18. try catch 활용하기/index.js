// try catch 활용하기
function printMember(members) {
  try {
    for (const member of members) {
      console.log(member);
    }
  } catch (error) {
    console.error(error);
    alert(`${error.name}가 발생했습니다. 콘솔창을 확인해 주세요.`);
  }
}

const teamA = ["상현", "현승", "종훈", "기찬"];
printMember(teamA);

const codeit = { name: "codeit" };
printMember(codeit);

const teamB = ["영훈", "윤수", "동욱", "다영"];
printMember(teamB);
