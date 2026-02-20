import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2471 } from "./fragment2471";
import type { FragmentToken2472 } from "./fragment2472";

export const FRAGMENT_2473 = gql(`
  fragment Fragment2473 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult2473 = ResultOf<typeof FRAGMENT_2473>;
type FragmentSelf2473 = NonNullable<FragmentResult2473>;

export type FragmentToken2473 =
  | FragmentSelf2473["__typename"]
  | FragmentSelf2473["typenameHint"] | FragmentToken2471 | FragmentToken2472;
