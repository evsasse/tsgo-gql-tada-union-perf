import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2534 } from "./fragment2534";
import type { FragmentToken2535 } from "./fragment2535";

export const FRAGMENT_2536 = gql(`
  fragment Fragment2536 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult2536 = ResultOf<typeof FRAGMENT_2536>;
type FragmentSelf2536 = NonNullable<FragmentResult2536>;

export type FragmentToken2536 =
  | FragmentSelf2536["__typename"]
  | FragmentSelf2536["typenameHint"] | FragmentToken2534 | FragmentToken2535;
