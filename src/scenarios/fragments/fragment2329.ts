import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2327 } from "./fragment2327";
import type { FragmentToken2328 } from "./fragment2328";

export const FRAGMENT_2329 = gql(`
  fragment Fragment2329 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult2329 = ResultOf<typeof FRAGMENT_2329>;
type FragmentSelf2329 = NonNullable<FragmentResult2329>;

export type FragmentToken2329 =
  | FragmentSelf2329["__typename"]
  | FragmentSelf2329["typenameHint"] | FragmentToken2327 | FragmentToken2328;
