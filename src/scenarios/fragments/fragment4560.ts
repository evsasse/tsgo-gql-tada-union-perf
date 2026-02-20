import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4558 } from "./fragment4558";
import type { FragmentToken4559 } from "./fragment4559";

export const FRAGMENT_4560 = gql(`
  fragment Fragment4560 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult4560 = ResultOf<typeof FRAGMENT_4560>;
type FragmentSelf4560 = NonNullable<FragmentResult4560>;

export type FragmentToken4560 =
  | FragmentSelf4560["__typename"]
  | FragmentSelf4560["typenameHint"] | FragmentToken4558 | FragmentToken4559;
