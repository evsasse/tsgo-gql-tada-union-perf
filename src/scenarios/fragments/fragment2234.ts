import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2232 } from "./fragment2232";
import type { FragmentToken2233 } from "./fragment2233";

export const FRAGMENT_2234 = gql(`
  fragment Fragment2234 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult2234 = ResultOf<typeof FRAGMENT_2234>;
type FragmentSelf2234 = NonNullable<FragmentResult2234>;

export type FragmentToken2234 =
  | FragmentSelf2234["__typename"]
  | FragmentSelf2234["typenameHint"] | FragmentToken2232 | FragmentToken2233;
