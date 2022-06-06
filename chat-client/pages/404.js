import Link from "next/link";

const Custom404Page = () => {
  return (
    <>
      <div>
        <h3
          style={{
            fontSize: "5em",
            fontWeight: "600",
            padding: "var(--padding-32) 0",
          }}
        >
          404
        </h3>
        <p>페이지를 찾을 수 없어요.</p>
        <p>Page not found.</p>
        <br />
      </div>
      <div>
        <Link href="/room">
          <a>홈으로 이동해주세요</a>
        </Link>
      </div>
    </>
  );
};

export default Custom404Page;
