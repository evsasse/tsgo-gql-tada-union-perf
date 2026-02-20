import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4180 } from "./fragment4180";
import type { FragmentToken4181 } from "./fragment4181";

export const FRAGMENT_4182 = gql(`
  fragment Fragment4182 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult4182 = ResultOf<typeof FRAGMENT_4182>;
type FragmentSelf4182 = NonNullable<FragmentResult4182>;

export type FragmentToken4182 =
  | FragmentSelf4182["__typename"]
  | FragmentSelf4182["typenameHint"] | FragmentToken4180 | FragmentToken4181;
