const ItemCard = () => {
  return (
    <div className="w-full h-full min-w-[100px] max-w-[320px] max-h-[378px] bg-white rounded-[10px] flex flex-col border border-gray-300">
      <div className="w-full h-[190px] bg-gray-500 rounded-t-[10px]" />
      <div className="flex flex-col justify-between h-full p-6 gap-2.5">
        <div className="text-2xl font-bold">Item Title</div>
        <div className="flex justify-between">
          <div>Item Price</div>
        </div>
        <button className="bg-background-primary text-white p-2.5 rounded-[10px] text-base font-bold">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
