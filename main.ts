namespace MyMemberKind {

    let kindid: number;
    
    export function create() {
        if (!(kindid)) kindid = 0
        return kindid++
    }

    export const myMember = create()

}

//%block="my kind"
//%color="#f7d84d"
//%icon="\uf02e"
namespace MyKinds {

    //%shim=KIND_GET
    //%kindMemberName=Member
    //%blockId=MyKinds_kind_get
    //%block="$arg"
    //%kindNamespace=MyMemberKind 
    //%kindPromptHint="enter your member here"
    export function getKind(arg: number) { return arg }

}
