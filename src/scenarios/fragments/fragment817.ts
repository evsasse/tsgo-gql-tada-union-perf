import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken815 } from "./fragment815";
import type { FragmentToken816 } from "./fragment816";

export const FRAGMENT_817 = gql(`
  fragment Fragment817 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult817 = ResultOf<typeof FRAGMENT_817>;
type FragmentSelf817 = NonNullable<FragmentResult817>;

export type FragmentToken817 =
  | FragmentSelf817["__typename"]
  | FragmentSelf817["typenameHint"] | FragmentToken815 | FragmentToken816;
