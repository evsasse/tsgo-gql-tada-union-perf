import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4488 } from "./fragment4488";
import type { FragmentToken4489 } from "./fragment4489";

export const FRAGMENT_4490 = gql(`
  fragment Fragment4490 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult4490 = ResultOf<typeof FRAGMENT_4490>;
type FragmentSelf4490 = NonNullable<FragmentResult4490>;

export type FragmentToken4490 =
  | FragmentSelf4490["__typename"]
  | FragmentSelf4490["typenameHint"] | FragmentToken4488 | FragmentToken4489;
