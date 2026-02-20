import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2535 } from "./fragment2535";
import type { FragmentToken2536 } from "./fragment2536";

export const FRAGMENT_2537 = gql(`
  fragment Fragment2537 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult2537 = ResultOf<typeof FRAGMENT_2537>;
type FragmentSelf2537 = NonNullable<FragmentResult2537>;

export type FragmentToken2537 =
  | FragmentSelf2537["__typename"]
  | FragmentSelf2537["typenameHint"] | FragmentToken2535 | FragmentToken2536;
