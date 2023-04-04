import { profileEnd } from "console";
import Image from "next/image";
import React from "react";
import { subscriptionDetailstype } from "../../src/pages/subscriptions";
import Link from "next/link";
type Prop = {
  subscriptionDetail: subscriptionDetailstype;
};

const ChannelBanner = ({ subscriptionDetail }: Prop) => {
  return (
    <div className=" w-full  shadow-md hover:shadow-xl  shadow-bg-secondary cursor-pointer  p-4 bg-bg-secondary">
      <Link
        className=" w-full h-full"
        href={`/channel/${subscriptionDetail?.username}`}
      >
        <div className="flex flex-col gap-y items-center">
          <div className=" relative w-40 h-40 rounded-full overflow-hidden">
            <Image
              src={`${process.env.BACKEND_URL}/images/${subscriptionDetail?.profile_pic}`}
              alt="channel_banner"
              fill
            />
          </div>
          {/* <div className=" font-semibold ">@{subscriptionDetail?.username}</div> */}
          <div className=" font-bold capitalize text-red-500">
            {subscriptionDetail?.fullname}
          </div>

          <div className="  text-sm  capitalize">
            <span className=" font-extrabold ">
              {subscriptionDetail?.subscribersLength}
            </span>
            subscribers
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelBanner;
