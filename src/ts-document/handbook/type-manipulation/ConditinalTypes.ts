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

    type N<T> = T extends string
        ? string : number

    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
        return {name: idOrName} as NameOrId<T>;
    }


    let nameLabel = createLabel("Hello");
    let idLabel = createLabel(123);
    console.log(nameLabel);
    console.log(idLabel);

    type MessageOf<T extends { message: unknown }> = T["message"];

    interface Email {
        message: string;
    }

    type EmailMessageContents = MessageOf<Email>;

    type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
}