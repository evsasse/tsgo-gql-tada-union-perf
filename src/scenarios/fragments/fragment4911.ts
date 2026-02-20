import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4909 } from "./fragment4909";
import type { FragmentToken4910 } from "./fragment4910";

export const FRAGMENT_4911 = gql(`
  fragment Fragment4911 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult4911 = ResultOf<typeof FRAGMENT_4911>;
type FragmentSelf4911 = NonNullable<FragmentResult4911>;

export type FragmentToken4911 =
  | FragmentSelf4911["__typename"]
  | FragmentSelf4911["typenameHint"] | FragmentToken4909 | FragmentToken4910;
