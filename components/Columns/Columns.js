import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Emily J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "KKP Luggages saved my day! As a frequent traveler, I often struggle with luggage logistics, but their seamless service made it a breeze. Highly recommended!"
    },
    {
        id: uuid(),
        title: "Jason F.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I can't thank KKP Luggages enough for their convenience and reliability. From drop-off to pick-up, everything was smooth sailing. Five stars!"
    },
    {
        id: uuid(),
        title: "Asante J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "KKP Luggages is a game-changer! No more dragging heavy bags around town. Their service is fast, secure, and affordable. Will definitely use again!"
    },
    {
        id: uuid(),
        title: "Kwame Asamoah L.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Impressed by KKP Luggages' professionalism and efficiency. Whether you're a tourist or a local needing storage, they've got you covered. A must-try!"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
