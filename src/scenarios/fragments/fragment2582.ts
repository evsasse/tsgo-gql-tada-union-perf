import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2580 } from "./fragment2580";
import type { FragmentToken2581 } from "./fragment2581";

export const FRAGMENT_2582 = gql(`
  fragment Fragment2582 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult2582 = ResultOf<typeof FRAGMENT_2582>;
type FragmentSelf2582 = NonNullable<FragmentResult2582>;

export type FragmentToken2582 =
  | FragmentSelf2582["__typename"]
  | FragmentSelf2582["typenameHint"] | FragmentToken2580 | FragmentToken2581;
