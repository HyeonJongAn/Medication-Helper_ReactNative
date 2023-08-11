class user {
    uID: string;
    uPW: string;
    uName: string;
    uGender: string;
    birthDate: string;
    tag: number;

    constructor() {
        this.uID = "";
        this.uPW = "";
        this.uName = "";
        this.uGender = "";
        this.birthDate = "";
        this.tag = 0;
    }

    init() {
        this.uID = "";
        this.uPW = "";
        this.uName = "";
        this.uGender = "";
        this.birthDate = "";
        this.tag = 0;
    }
}

export var currentUser = new user();