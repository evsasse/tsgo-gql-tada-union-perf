import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3038 } from "./fragment3038";
import type { FragmentToken3039 } from "./fragment3039";

export const FRAGMENT_3040 = gql(`
  fragment Fragment3040 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult3040 = ResultOf<typeof FRAGMENT_3040>;
type FragmentSelf3040 = NonNullable<FragmentResult3040>;

export type FragmentToken3040 =
  | FragmentSelf3040["__typename"]
  | FragmentSelf3040["typenameHint"] | FragmentToken3038 | FragmentToken3039;
