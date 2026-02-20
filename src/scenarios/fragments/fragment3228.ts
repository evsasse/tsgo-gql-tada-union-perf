import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3226 } from "./fragment3226";
import type { FragmentToken3227 } from "./fragment3227";

export const FRAGMENT_3228 = gql(`
  fragment Fragment3228 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult3228 = ResultOf<typeof FRAGMENT_3228>;
type FragmentSelf3228 = NonNullable<FragmentResult3228>;

export type FragmentToken3228 =
  | FragmentSelf3228["__typename"]
  | FragmentSelf3228["typenameHint"] | FragmentToken3226 | FragmentToken3227;
