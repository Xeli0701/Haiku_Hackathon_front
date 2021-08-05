import Image from 'next/image'
import Link from "next/link";

export const Header = () => {
  return (
    <div className="container mx-auto my-5">
        <header className="flex justify-evenly items-center">
            <Link href="/">
            <a>
                <Image
                src={"/logo.webp"}
                alt="ロゴ"
                width={400}
                height={100}
                />
            </a>
            </Link>
            <nav>
            <div>ボタンを押すか、画像をアップロードする事で俳句を生成します。</div>
            </nav>
        </header>
    </div>
  )
}
