import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const cardsData = [
    {
        title: "Total revenue",
        Icon: <span className="bg-orange-600 lg:p-2 p-[5px] rounded-full text-white"><FaMoneyBillTrendUp className='text-sm' /></span>,
        figure: "$ 216k",
        profit: "$341",
        colors: "green"
    },
    {
        title: "Invoices",
        Icon: <span className="bg-green-800 lg:p-2 p-[5px] rounded-full text-white"><LiaFileInvoiceSolid className='text-sm' /></span>,
        figure: "2,222",
        profit: "121",
        colors: "green"
    },
    {
        title: "Clients",
        Icon: <span className=" bg-blue-800 lg:p-2 p-[5px] rounded-full text-white"><FaRegUser className='text-sm' /></span>,
        figure: "1,425",
        profit: "341",
        colors: "green"
    },
    {
        title: "Loyalty",
        Icon: <span className=" bg-pink-600 lg:p-2 p-[5px] rounded-full text-white"><FaRegHeart className='text-sm' /></span>,
        figure: "78%",
        profit: "60%",
        colors: "pink"
    },

]