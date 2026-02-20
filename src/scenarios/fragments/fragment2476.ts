import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2474 } from "./fragment2474";
import type { FragmentToken2475 } from "./fragment2475";

export const FRAGMENT_2476 = gql(`
  fragment Fragment2476 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult2476 = ResultOf<typeof FRAGMENT_2476>;
type FragmentSelf2476 = NonNullable<FragmentResult2476>;

export type FragmentToken2476 =
  | FragmentSelf2476["__typename"]
  | FragmentSelf2476["typenameHint"] | FragmentToken2474 | FragmentToken2475;
