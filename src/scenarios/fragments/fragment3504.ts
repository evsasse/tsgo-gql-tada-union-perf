import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3502 } from "./fragment3502";
import type { FragmentToken3503 } from "./fragment3503";

export const FRAGMENT_3504 = gql(`
  fragment Fragment3504 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult3504 = ResultOf<typeof FRAGMENT_3504>;
type FragmentSelf3504 = NonNullable<FragmentResult3504>;

export type FragmentToken3504 =
  | FragmentSelf3504["__typename"]
  | FragmentSelf3504["typenameHint"] | FragmentToken3502 | FragmentToken3503;
