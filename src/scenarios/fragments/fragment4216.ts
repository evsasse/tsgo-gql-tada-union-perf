import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4214 } from "./fragment4214";
import type { FragmentToken4215 } from "./fragment4215";

export const FRAGMENT_4216 = gql(`
  fragment Fragment4216 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult4216 = ResultOf<typeof FRAGMENT_4216>;
type FragmentSelf4216 = NonNullable<FragmentResult4216>;

export type FragmentToken4216 =
  | FragmentSelf4216["__typename"]
  | FragmentSelf4216["typenameHint"] | FragmentToken4214 | FragmentToken4215;
