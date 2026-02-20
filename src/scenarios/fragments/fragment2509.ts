import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2507 } from "./fragment2507";
import type { FragmentToken2508 } from "./fragment2508";

export const FRAGMENT_2509 = gql(`
  fragment Fragment2509 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult2509 = ResultOf<typeof FRAGMENT_2509>;
type FragmentSelf2509 = NonNullable<FragmentResult2509>;

export type FragmentToken2509 =
  | FragmentSelf2509["__typename"]
  | FragmentSelf2509["typenameHint"] | FragmentToken2507 | FragmentToken2508;
