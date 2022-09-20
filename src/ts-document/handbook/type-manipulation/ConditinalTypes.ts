namespace Condition {

    interface IdLabel {
        id: number;
    }
    interface NameLabel {
        name: string;
    }

    type NameOrId<T> = T extends number
        ? IdLabel
        : NameLabel;

    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
        if (typeof idOrName === "number") {
            return {
                id: idOrName,
            }
        }
        return {
            name: idOrName
        }
    }


    createLabel("Hello");

    type MessageOf<T extends { message: unknown }> = T["message"];

    interface Email {
        message: string;
    }

    type EmailMessageContents = MessageOf<Email>;
}