import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2429 } from "./fragment2429";
import type { FragmentToken2430 } from "./fragment2430";

export const FRAGMENT_2431 = gql(`
  fragment Fragment2431 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult2431 = ResultOf<typeof FRAGMENT_2431>;
type FragmentSelf2431 = NonNullable<FragmentResult2431>;

export type FragmentToken2431 =
  | FragmentSelf2431["__typename"]
  | FragmentSelf2431["typenameHint"] | FragmentToken2429 | FragmentToken2430;
