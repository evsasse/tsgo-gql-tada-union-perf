import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2444 } from "./fragment2444";
import type { FragmentToken2445 } from "./fragment2445";

export const FRAGMENT_2446 = gql(`
  fragment Fragment2446 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult2446 = ResultOf<typeof FRAGMENT_2446>;
type FragmentSelf2446 = NonNullable<FragmentResult2446>;

export type FragmentToken2446 =
  | FragmentSelf2446["__typename"]
  | FragmentSelf2446["typenameHint"] | FragmentToken2444 | FragmentToken2445;
