import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4895 } from "./fragment4895";
import type { FragmentToken4896 } from "./fragment4896";

export const FRAGMENT_4897 = gql(`
  fragment Fragment4897 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult4897 = ResultOf<typeof FRAGMENT_4897>;
type FragmentSelf4897 = NonNullable<FragmentResult4897>;

export type FragmentToken4897 =
  | FragmentSelf4897["__typename"]
  | FragmentSelf4897["typenameHint"] | FragmentToken4895 | FragmentToken4896;
