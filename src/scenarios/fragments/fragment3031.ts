import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3029 } from "./fragment3029";
import type { FragmentToken3030 } from "./fragment3030";

export const FRAGMENT_3031 = gql(`
  fragment Fragment3031 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult3031 = ResultOf<typeof FRAGMENT_3031>;
type FragmentSelf3031 = NonNullable<FragmentResult3031>;

export type FragmentToken3031 =
  | FragmentSelf3031["__typename"]
  | FragmentSelf3031["typenameHint"] | FragmentToken3029 | FragmentToken3030;
