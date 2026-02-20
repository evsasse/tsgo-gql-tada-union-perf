import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4181 } from "./fragment4181";
import type { FragmentToken4182 } from "./fragment4182";

export const FRAGMENT_4183 = gql(`
  fragment Fragment4183 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult4183 = ResultOf<typeof FRAGMENT_4183>;
type FragmentSelf4183 = NonNullable<FragmentResult4183>;

export type FragmentToken4183 =
  | FragmentSelf4183["__typename"]
  | FragmentSelf4183["typenameHint"] | FragmentToken4181 | FragmentToken4182;
