import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3057 } from "./fragment3057";
import type { FragmentToken3058 } from "./fragment3058";

export const FRAGMENT_3059 = gql(`
  fragment Fragment3059 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult3059 = ResultOf<typeof FRAGMENT_3059>;
type FragmentSelf3059 = NonNullable<FragmentResult3059>;

export type FragmentToken3059 =
  | FragmentSelf3059["__typename"]
  | FragmentSelf3059["typenameHint"] | FragmentToken3057 | FragmentToken3058;
