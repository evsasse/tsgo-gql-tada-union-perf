import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken789 } from "./fragment789";
import type { FragmentToken790 } from "./fragment790";

export const FRAGMENT_791 = gql(`
  fragment Fragment791 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult791 = ResultOf<typeof FRAGMENT_791>;
type FragmentSelf791 = NonNullable<FragmentResult791>;

export type FragmentToken791 =
  | FragmentSelf791["__typename"]
  | FragmentSelf791["typenameHint"] | FragmentToken789 | FragmentToken790;
