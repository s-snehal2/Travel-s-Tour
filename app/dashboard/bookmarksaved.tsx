import { Bookmark } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function BookmarkSaved() {
  const [fill, setFill] = useState(false);
  function handleAddToBkm() {
    if (!fill) toast("Saved");
    else toast("Removed");
    setFill(!fill);
  }

  return (
    <div>
      <div
        className="bg-secondary/70 p-1 rounded-full hover:bg-muted transition"
        onClick={handleAddToBkm}
      >
        {fill ? <Bookmark className="fill-primary" /> : <Bookmark />}
      </div>
    </div>
  );
}

export default BookmarkSaved;
