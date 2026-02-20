import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3056 } from "./fragment3056";
import type { FragmentToken3057 } from "./fragment3057";

export const FRAGMENT_3058 = gql(`
  fragment Fragment3058 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult3058 = ResultOf<typeof FRAGMENT_3058>;
type FragmentSelf3058 = NonNullable<FragmentResult3058>;

export type FragmentToken3058 =
  | FragmentSelf3058["__typename"]
  | FragmentSelf3058["typenameHint"] | FragmentToken3056 | FragmentToken3057;
