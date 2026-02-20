import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2383 } from "./fragment2383";
import type { FragmentToken2384 } from "./fragment2384";

export const FRAGMENT_2385 = gql(`
  fragment Fragment2385 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult2385 = ResultOf<typeof FRAGMENT_2385>;
type FragmentSelf2385 = NonNullable<FragmentResult2385>;

export type FragmentToken2385 =
  | FragmentSelf2385["__typename"]
  | FragmentSelf2385["typenameHint"] | FragmentToken2383 | FragmentToken2384;
