import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2400 } from "./fragment2400";
import type { FragmentToken2401 } from "./fragment2401";

export const FRAGMENT_2402 = gql(`
  fragment Fragment2402 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult2402 = ResultOf<typeof FRAGMENT_2402>;
type FragmentSelf2402 = NonNullable<FragmentResult2402>;

export type FragmentToken2402 =
  | FragmentSelf2402["__typename"]
  | FragmentSelf2402["typenameHint"] | FragmentToken2400 | FragmentToken2401;
