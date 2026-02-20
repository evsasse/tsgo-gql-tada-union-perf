import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2431 } from "./fragment2431";
import type { FragmentToken2432 } from "./fragment2432";

export const FRAGMENT_2433 = gql(`
  fragment Fragment2433 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult2433 = ResultOf<typeof FRAGMENT_2433>;
type FragmentSelf2433 = NonNullable<FragmentResult2433>;

export type FragmentToken2433 =
  | FragmentSelf2433["__typename"]
  | FragmentSelf2433["typenameHint"] | FragmentToken2431 | FragmentToken2432;
