import { ComponentStory } from "@storybook/react";
import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

export default {
  title: "Personal/ButtonPrimary",
  component: ButtonPrimary,
};

const Template: ComponentStory<typeof ButtonPrimary> = () => {
  const [messageClick, setMessageClick] = useState("");

  const onClick = () => setMessageClick("clicked");

  return (
    <>
      <ButtonPrimary label="Click it" onClick={onClick} />
      <div>{messageClick}</div>
    </>
  );
};

export const Primary = Template.bind({});
