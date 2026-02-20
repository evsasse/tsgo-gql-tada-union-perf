import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4791 } from "./fragment4791";
import type { FragmentToken4792 } from "./fragment4792";

export const FRAGMENT_4793 = gql(`
  fragment Fragment4793 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult4793 = ResultOf<typeof FRAGMENT_4793>;
type FragmentSelf4793 = NonNullable<FragmentResult4793>;

export type FragmentToken4793 =
  | FragmentSelf4793["__typename"]
  | FragmentSelf4793["typenameHint"] | FragmentToken4791 | FragmentToken4792;
