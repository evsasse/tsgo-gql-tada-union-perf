import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3027 } from "./fragment3027";
import type { FragmentToken3028 } from "./fragment3028";

export const FRAGMENT_3029 = gql(`
  fragment Fragment3029 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult3029 = ResultOf<typeof FRAGMENT_3029>;
type FragmentSelf3029 = NonNullable<FragmentResult3029>;

export type FragmentToken3029 =
  | FragmentSelf3029["__typename"]
  | FragmentSelf3029["typenameHint"] | FragmentToken3027 | FragmentToken3028;
