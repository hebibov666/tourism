import { useRouter } from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment/moment";
import { client } from "@/sanity/lib/client";
function Detail({post}){
    const router = useRouter();
    return(
        <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] pl-2 h-[40px] items-center bg-blue-600 text-white font-bold">
                <ArrowBackIcon onClick={()=>{router.back()}}></ArrowBackIcon>
                <h1>Ətraflı</h1>
            </div>
          <div className="grid grid-cols-2 max-[750px]:grid-cols-1">
            <div className="p-4 h-[100%]">
                <img src={post[0].mainImage.asset.url} className="w-full h-full"></img>
            </div>
          <div className="flex flex-col p-[10px] gap-[10px]">
          <h1 className="font-bold text-[20px]">{post[0].title}</h1>
         <div className="bg-[#F5F5F5] flex flex-col gap-[10px] p-4 rounded-[10px] shadow-sm shadow-gray-400 text-black">
<p className="flex items-center gap-[10px]">Əlaqə telefonu: <a href={`tel://${post[0].phone}`} className="text-blue-400">{post[0].phone}</a></p>
          <p>Əlaqədar şəxs: {post[0].contact}</p>
          <p>{moment(post.publishedAt).format('DD.MM.YYYY')}</p>
         </div>
        <div className="flex flex-col">
            <h1 className="font-bold text-[18px]">Tur haqqında</h1>
            <p>{post[0].description}</p>
        </div>
          </div>
          </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const {id}=params
    try {
        console.log(params.name)
        const post = await client.fetch(
            `*[_type=="post" && _id == "${id}"]{
                _id,
                title,
                description,
                price,
                type,
                phone,
                contact,
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
                post,
            }
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                post:[],
            } 
        };
    }
}
export default Detail