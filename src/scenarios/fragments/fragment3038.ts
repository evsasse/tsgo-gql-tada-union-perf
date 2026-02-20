import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3036 } from "./fragment3036";
import type { FragmentToken3037 } from "./fragment3037";

export const FRAGMENT_3038 = gql(`
  fragment Fragment3038 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult3038 = ResultOf<typeof FRAGMENT_3038>;
type FragmentSelf3038 = NonNullable<FragmentResult3038>;

export type FragmentToken3038 =
  | FragmentSelf3038["__typename"]
  | FragmentSelf3038["typenameHint"] | FragmentToken3036 | FragmentToken3037;
