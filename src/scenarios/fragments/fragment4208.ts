import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4206 } from "./fragment4206";
import type { FragmentToken4207 } from "./fragment4207";

export const FRAGMENT_4208 = gql(`
  fragment Fragment4208 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult4208 = ResultOf<typeof FRAGMENT_4208>;
type FragmentSelf4208 = NonNullable<FragmentResult4208>;

export type FragmentToken4208 =
  | FragmentSelf4208["__typename"]
  | FragmentSelf4208["typenameHint"] | FragmentToken4206 | FragmentToken4207;
