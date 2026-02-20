import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2405 } from "./fragment2405";
import type { FragmentToken2406 } from "./fragment2406";

export const FRAGMENT_2407 = gql(`
  fragment Fragment2407 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult2407 = ResultOf<typeof FRAGMENT_2407>;
type FragmentSelf2407 = NonNullable<FragmentResult2407>;

export type FragmentToken2407 =
  | FragmentSelf2407["__typename"]
  | FragmentSelf2407["typenameHint"] | FragmentToken2405 | FragmentToken2406;
