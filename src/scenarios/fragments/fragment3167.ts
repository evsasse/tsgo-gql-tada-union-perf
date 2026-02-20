import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3165 } from "./fragment3165";
import type { FragmentToken3166 } from "./fragment3166";

export const FRAGMENT_3167 = gql(`
  fragment Fragment3167 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult3167 = ResultOf<typeof FRAGMENT_3167>;
type FragmentSelf3167 = NonNullable<FragmentResult3167>;

export type FragmentToken3167 =
  | FragmentSelf3167["__typename"]
  | FragmentSelf3167["typenameHint"] | FragmentToken3165 | FragmentToken3166;
