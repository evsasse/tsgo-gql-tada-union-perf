import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2432 } from "./fragment2432";
import type { FragmentToken2433 } from "./fragment2433";

export const FRAGMENT_2434 = gql(`
  fragment Fragment2434 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult2434 = ResultOf<typeof FRAGMENT_2434>;
type FragmentSelf2434 = NonNullable<FragmentResult2434>;

export type FragmentToken2434 =
  | FragmentSelf2434["__typename"]
  | FragmentSelf2434["typenameHint"] | FragmentToken2432 | FragmentToken2433;
