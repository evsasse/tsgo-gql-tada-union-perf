import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3501 } from "./fragment3501";
import type { FragmentToken3502 } from "./fragment3502";

export const FRAGMENT_3503 = gql(`
  fragment Fragment3503 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult3503 = ResultOf<typeof FRAGMENT_3503>;
type FragmentSelf3503 = NonNullable<FragmentResult3503>;

export type FragmentToken3503 =
  | FragmentSelf3503["__typename"]
  | FragmentSelf3503["typenameHint"] | FragmentToken3501 | FragmentToken3502;
