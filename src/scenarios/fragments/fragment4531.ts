import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4529 } from "./fragment4529";
import type { FragmentToken4530 } from "./fragment4530";

export const FRAGMENT_4531 = gql(`
  fragment Fragment4531 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult4531 = ResultOf<typeof FRAGMENT_4531>;
type FragmentSelf4531 = NonNullable<FragmentResult4531>;

export type FragmentToken4531 =
  | FragmentSelf4531["__typename"]
  | FragmentSelf4531["typenameHint"] | FragmentToken4529 | FragmentToken4530;
