import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2440 } from "./fragment2440";
import type { FragmentToken2441 } from "./fragment2441";

export const FRAGMENT_2442 = gql(`
  fragment Fragment2442 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult2442 = ResultOf<typeof FRAGMENT_2442>;
type FragmentSelf2442 = NonNullable<FragmentResult2442>;

export type FragmentToken2442 =
  | FragmentSelf2442["__typename"]
  | FragmentSelf2442["typenameHint"] | FragmentToken2440 | FragmentToken2441;
