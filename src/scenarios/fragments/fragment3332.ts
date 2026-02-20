import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3330 } from "./fragment3330";
import type { FragmentToken3331 } from "./fragment3331";

export const FRAGMENT_3332 = gql(`
  fragment Fragment3332 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult3332 = ResultOf<typeof FRAGMENT_3332>;
type FragmentSelf3332 = NonNullable<FragmentResult3332>;

export type FragmentToken3332 =
  | FragmentSelf3332["__typename"]
  | FragmentSelf3332["typenameHint"] | FragmentToken3330 | FragmentToken3331;
