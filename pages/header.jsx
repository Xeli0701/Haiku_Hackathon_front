import Image from 'next/image'
import Link from "next/link";

export const Header = () => {
  return (
    <div class="container mx-auto">
        <header className="flex justify-between items-center">
            <Link href="/">
            <a>
                <Image
                src={"/logo.png"}
                alt="ロゴ"
                width={400}
                height={100}
                />
            </a>
            </Link>
            <nav>
            <div>写真をアップロードしたら俳句を作成します</div>
            </nav>
        </header>
    </div>
  )
}
