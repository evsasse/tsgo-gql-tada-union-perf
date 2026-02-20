import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2433 } from "./fragment2433";
import type { FragmentToken2434 } from "./fragment2434";

export const FRAGMENT_2435 = gql(`
  fragment Fragment2435 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult2435 = ResultOf<typeof FRAGMENT_2435>;
type FragmentSelf2435 = NonNullable<FragmentResult2435>;

export type FragmentToken2435 =
  | FragmentSelf2435["__typename"]
  | FragmentSelf2435["typenameHint"] | FragmentToken2433 | FragmentToken2434;
