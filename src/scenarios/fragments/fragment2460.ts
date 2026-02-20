import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2458 } from "./fragment2458";
import type { FragmentToken2459 } from "./fragment2459";

export const FRAGMENT_2460 = gql(`
  fragment Fragment2460 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult2460 = ResultOf<typeof FRAGMENT_2460>;
type FragmentSelf2460 = NonNullable<FragmentResult2460>;

export type FragmentToken2460 =
  | FragmentSelf2460["__typename"]
  | FragmentSelf2460["typenameHint"] | FragmentToken2458 | FragmentToken2459;
