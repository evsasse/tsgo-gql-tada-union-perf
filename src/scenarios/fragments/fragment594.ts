import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken592 } from "./fragment592";
import type { FragmentToken593 } from "./fragment593";

export const FRAGMENT_594 = gql(`
  fragment Fragment594 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult594 = ResultOf<typeof FRAGMENT_594>;
type FragmentSelf594 = NonNullable<FragmentResult594>;

export type FragmentToken594 =
  | FragmentSelf594["__typename"]
  | FragmentSelf594["typenameHint"] | FragmentToken592 | FragmentToken593;
