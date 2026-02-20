import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3026 } from "./fragment3026";
import type { FragmentToken3027 } from "./fragment3027";

export const FRAGMENT_3028 = gql(`
  fragment Fragment3028 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult3028 = ResultOf<typeof FRAGMENT_3028>;
type FragmentSelf3028 = NonNullable<FragmentResult3028>;

export type FragmentToken3028 =
  | FragmentSelf3028["__typename"]
  | FragmentSelf3028["typenameHint"] | FragmentToken3026 | FragmentToken3027;
