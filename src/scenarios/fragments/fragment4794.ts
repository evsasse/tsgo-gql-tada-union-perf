import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4792 } from "./fragment4792";
import type { FragmentToken4793 } from "./fragment4793";

export const FRAGMENT_4794 = gql(`
  fragment Fragment4794 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult4794 = ResultOf<typeof FRAGMENT_4794>;
type FragmentSelf4794 = NonNullable<FragmentResult4794>;

export type FragmentToken4794 =
  | FragmentSelf4794["__typename"]
  | FragmentSelf4794["typenameHint"] | FragmentToken4792 | FragmentToken4793;
