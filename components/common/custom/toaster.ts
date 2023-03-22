import toast from "react-hot-toast";

export const toaster = (type:any,message: any) => {
    switch (type) {
        case "success":
            // toast.custom((t)=>(
            //     <div>hello</div>
            // ))
            toast.success(message);
            break;  
        case "error":
            toast.error(message);
            break;

}
}
