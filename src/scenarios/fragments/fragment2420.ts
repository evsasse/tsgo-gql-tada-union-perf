import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2418 } from "./fragment2418";
import type { FragmentToken2419 } from "./fragment2419";

export const FRAGMENT_2420 = gql(`
  fragment Fragment2420 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult2420 = ResultOf<typeof FRAGMENT_2420>;
type FragmentSelf2420 = NonNullable<FragmentResult2420>;

export type FragmentToken2420 =
  | FragmentSelf2420["__typename"]
  | FragmentSelf2420["typenameHint"] | FragmentToken2418 | FragmentToken2419;
