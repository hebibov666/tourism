import { useRouter } from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment/moment";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
function TourPage({ posts, decodedUrl }) {
    const router = useRouter();

    return (
        <div className="w-full flex flex-col">
            <div className="bg-blue-600 pl-2 text-white h-[40px] flex gap-[10px] items-center">
                <ArrowBackIcon onClick={() => { router.push("/") }} className="font-bold"></ArrowBackIcon>
                <h1 className="font-bold">{decodedUrl}</h1>
            </div>
          {posts.length <= 0 ? <div className="w-full min-h-[100vh] flex flex-col gap-[20px] items-center justify-center">
            <HourglassDisabledIcon className="text-[100px] text-[#A0A0A0]"/>
            <h1 className="font-bold text-[20px] text-[#A0A0A0]">Bu kateqoriyada tur yoxdur</h1>
          </div> :   <div className="w-full gap-[10px] overflow-hidden p-[20px] grid grid-cols-2 max-[450px]:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {posts?.map(post => {
                    return (
                       <Link href={`/tourdetail/${post._id}`}>
                         <div key={post._id} className="w-1/1 shadow-sm shadow-[#A8A8A8] h-[320px] rounded-[10px]">
                            <div className="w-full h-[200px]">
                                <img src={post.mainImage.asset.url} className="w-full rounded-t-[10px] h-full object-cover" alt={post.title}></img>
                            </div>
                            <div className="pl-2 gap-[10px] pt-2 flex flex-col">
                                <p className="font-bold">{post.title}</p>
                                <span className="w-[100px] p-[3px] bg-blue-600 text-white font-bold rounded-[7px] flex items-center justify-center">{post.price}  Azn</span>
                                <p>{moment(post.publishedAt).format('DD.MM.YYYY')}</p>
                            </div>
                        </div>
                       </Link>
                    );
                })}
            </div>}
        </div>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const decodedUrl = decodeURIComponent(params.name);
    try {
        const posts = await client.fetch(
            `*[_type=="post" && type == "${decodedUrl}"]{
                _id,
                title,
                description,
                price,
                type,
                publishedAt,
                mainImage{
                    asset -> {
                        _id,
                        url
                    }
                }
            }`
        );
        return {
            props: {
                posts,
                decodedUrl
            }
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                posts: [],
                decodedUrl
            }
        };
    }
}

export default TourPage;
