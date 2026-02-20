import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2472 } from "./fragment2472";
import type { FragmentToken2473 } from "./fragment2473";

export const FRAGMENT_2474 = gql(`
  fragment Fragment2474 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult2474 = ResultOf<typeof FRAGMENT_2474>;
type FragmentSelf2474 = NonNullable<FragmentResult2474>;

export type FragmentToken2474 =
  | FragmentSelf2474["__typename"]
  | FragmentSelf2474["typenameHint"] | FragmentToken2472 | FragmentToken2473;
