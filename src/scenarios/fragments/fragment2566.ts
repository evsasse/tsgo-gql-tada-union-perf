import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2564 } from "./fragment2564";
import type { FragmentToken2565 } from "./fragment2565";

export const FRAGMENT_2566 = gql(`
  fragment Fragment2566 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult2566 = ResultOf<typeof FRAGMENT_2566>;
type FragmentSelf2566 = NonNullable<FragmentResult2566>;

export type FragmentToken2566 =
  | FragmentSelf2566["__typename"]
  | FragmentSelf2566["typenameHint"] | FragmentToken2564 | FragmentToken2565;
