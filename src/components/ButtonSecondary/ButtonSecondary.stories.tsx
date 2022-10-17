import { ComponentStory } from "@storybook/react";
import { useState } from "react";
import ButtonSecondary from "./ButtonSecondary";

export default {
  title: "Personal/ButtonSecondary",
  component: ButtonSecondary,
};

const Template: ComponentStory<typeof ButtonSecondary> = () => {
  const [messageClick, setMessageClick] = useState("");

  const onClick = () => setMessageClick("clicked");

  return (
    <>
      <ButtonSecondary label="Click it" onClick={onClick} />
      <div>{messageClick}</div>
    </>
  );
};

export const Secondary = Template.bind({});
