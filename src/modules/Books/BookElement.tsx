import { observer } from "mobx-react";
import { BookComponentPropsType } from "./Books.type";

export const BookElement = observer((props: BookComponentPropsType) => {
  const { ownerId, name, author } = props.book;
  return (
    <div>
      <div>
        {author} - "{name}"
      </div>
      <div>Owned By: {ownerId}</div>
    </div>
  );
});
