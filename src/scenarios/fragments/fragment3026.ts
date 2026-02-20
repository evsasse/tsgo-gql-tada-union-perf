import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3024 } from "./fragment3024";
import type { FragmentToken3025 } from "./fragment3025";

export const FRAGMENT_3026 = gql(`
  fragment Fragment3026 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult3026 = ResultOf<typeof FRAGMENT_3026>;
type FragmentSelf3026 = NonNullable<FragmentResult3026>;

export type FragmentToken3026 =
  | FragmentSelf3026["__typename"]
  | FragmentSelf3026["typenameHint"] | FragmentToken3024 | FragmentToken3025;
