import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4098 } from "./fragment4098";
import type { FragmentToken4099 } from "./fragment4099";

export const FRAGMENT_4100 = gql(`
  fragment Fragment4100 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult4100 = ResultOf<typeof FRAGMENT_4100>;
type FragmentSelf4100 = NonNullable<FragmentResult4100>;

export type FragmentToken4100 =
  | FragmentSelf4100["__typename"]
  | FragmentSelf4100["typenameHint"] | FragmentToken4098 | FragmentToken4099;
