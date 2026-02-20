import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2494 } from "./fragment2494";
import type { FragmentToken2495 } from "./fragment2495";

export const FRAGMENT_2496 = gql(`
  fragment Fragment2496 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult2496 = ResultOf<typeof FRAGMENT_2496>;
type FragmentSelf2496 = NonNullable<FragmentResult2496>;

export type FragmentToken2496 =
  | FragmentSelf2496["__typename"]
  | FragmentSelf2496["typenameHint"] | FragmentToken2494 | FragmentToken2495;
