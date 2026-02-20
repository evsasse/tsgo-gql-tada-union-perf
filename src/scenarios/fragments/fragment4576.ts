import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4574 } from "./fragment4574";
import type { FragmentToken4575 } from "./fragment4575";

export const FRAGMENT_4576 = gql(`
  fragment Fragment4576 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult4576 = ResultOf<typeof FRAGMENT_4576>;
type FragmentSelf4576 = NonNullable<FragmentResult4576>;

export type FragmentToken4576 =
  | FragmentSelf4576["__typename"]
  | FragmentSelf4576["typenameHint"] | FragmentToken4574 | FragmentToken4575;
