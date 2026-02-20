import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2404 } from "./fragment2404";
import type { FragmentToken2405 } from "./fragment2405";

export const FRAGMENT_2406 = gql(`
  fragment Fragment2406 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult2406 = ResultOf<typeof FRAGMENT_2406>;
type FragmentSelf2406 = NonNullable<FragmentResult2406>;

export type FragmentToken2406 =
  | FragmentSelf2406["__typename"]
  | FragmentSelf2406["typenameHint"] | FragmentToken2404 | FragmentToken2405;
