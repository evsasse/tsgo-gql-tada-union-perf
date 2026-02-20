import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2508 } from "./fragment2508";
import type { FragmentToken2509 } from "./fragment2509";

export const FRAGMENT_2510 = gql(`
  fragment Fragment2510 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult2510 = ResultOf<typeof FRAGMENT_2510>;
type FragmentSelf2510 = NonNullable<FragmentResult2510>;

export type FragmentToken2510 =
  | FragmentSelf2510["__typename"]
  | FragmentSelf2510["typenameHint"] | FragmentToken2508 | FragmentToken2509;
