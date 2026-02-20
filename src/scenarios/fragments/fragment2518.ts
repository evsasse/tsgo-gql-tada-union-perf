import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2516 } from "./fragment2516";
import type { FragmentToken2517 } from "./fragment2517";

export const FRAGMENT_2518 = gql(`
  fragment Fragment2518 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult2518 = ResultOf<typeof FRAGMENT_2518>;
type FragmentSelf2518 = NonNullable<FragmentResult2518>;

export type FragmentToken2518 =
  | FragmentSelf2518["__typename"]
  | FragmentSelf2518["typenameHint"] | FragmentToken2516 | FragmentToken2517;
