import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3025 } from "./fragment3025";
import type { FragmentToken3026 } from "./fragment3026";

export const FRAGMENT_3027 = gql(`
  fragment Fragment3027 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult3027 = ResultOf<typeof FRAGMENT_3027>;
type FragmentSelf3027 = NonNullable<FragmentResult3027>;

export type FragmentToken3027 =
  | FragmentSelf3027["__typename"]
  | FragmentSelf3027["typenameHint"] | FragmentToken3025 | FragmentToken3026;
