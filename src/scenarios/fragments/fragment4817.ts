import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4815 } from "./fragment4815";
import type { FragmentToken4816 } from "./fragment4816";

export const FRAGMENT_4817 = gql(`
  fragment Fragment4817 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult4817 = ResultOf<typeof FRAGMENT_4817>;
type FragmentSelf4817 = NonNullable<FragmentResult4817>;

export type FragmentToken4817 =
  | FragmentSelf4817["__typename"]
  | FragmentSelf4817["typenameHint"] | FragmentToken4815 | FragmentToken4816;
