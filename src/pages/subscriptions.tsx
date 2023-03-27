import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { getSubscriptions } from "../../api/subscription/subscription";
import ChannelBanner from "../../components/common/ChannelBanner";

export type subscriptionDetailstype = {
  _id: string;
  username: string;
  fullname: string;
  profile_pic: string;
  description: string;
  subscribersLength: number;
  subscriptionLength: number;
};

const Subscriptions = () => {
  const [subscriotionDetails, setSubscriotionDetails] = useState<
    subscriptionDetailstype[]
  >([]);
  useEffect(() => {
    getSubscriptions(setSubscriotionDetails);
  }, []);
  return (
    <div className=" grid grid-cols-4 p-4">
      {subscriotionDetails.length === 0 ? (
        <div>No subscriptions</div>
      ) : (
        subscriotionDetails.map((subscriptionDetail) => {
          return (
            <div key={subscriptionDetail._id}>
              <ChannelBanner subscriptionDetail={subscriptionDetail} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Subscriptions;
