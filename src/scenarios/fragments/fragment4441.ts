import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4439 } from "./fragment4439";
import type { FragmentToken4440 } from "./fragment4440";

export const FRAGMENT_4441 = gql(`
  fragment Fragment4441 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult4441 = ResultOf<typeof FRAGMENT_4441>;
type FragmentSelf4441 = NonNullable<FragmentResult4441>;

export type FragmentToken4441 =
  | FragmentSelf4441["__typename"]
  | FragmentSelf4441["typenameHint"] | FragmentToken4439 | FragmentToken4440;
