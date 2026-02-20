import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2581 } from "./fragment2581";
import type { FragmentToken2582 } from "./fragment2582";

export const FRAGMENT_2583 = gql(`
  fragment Fragment2583 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult2583 = ResultOf<typeof FRAGMENT_2583>;
type FragmentSelf2583 = NonNullable<FragmentResult2583>;

export type FragmentToken2583 =
  | FragmentSelf2583["__typename"]
  | FragmentSelf2583["typenameHint"] | FragmentToken2581 | FragmentToken2582;
